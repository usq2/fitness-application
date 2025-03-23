// description: food_name,
// food_nutrients[]->nutrient.name.toLowercase + _ + nutrient.unitName: amount

const fs = require("fs");
const path = require("path");
const brotli = require("brotli");
const keyMap = {
  fat: "fat_g",
  protein: "protein_g",
  carbohydrates: "carbs_g",
  cholestrol: "cholestrol_mg",
  calcium: "calcium_mg",
  iron: "iron_mg",
  sodium: "sodium_mg",
  fiber: "fiber_g",
  sugars: "freesugar_g",
  calories: "energy_kcal",
};

const keyMapINDB = {
  fat_g: "fat_g",
  protein_g: "protein_g",
  carb_g: "carbs_g",
  cholestrol_mg: "cholestrol_mg",
  calcium_mg: "calcium_mg",
  iron_mg: "iron_mg",
  sodium_mg: "sodium_mg",
  fiber_g: "fiber_g",
  freesugar_g: "freesugar_g",
  energy_kcal: "energy_kcal",
};

const outfile = "outfile.json";
const filePaths = [
  "food.json",
  //   "part_2.json",
  //   "part_3.json",
  //   "part_4.json",
  //   "part_5.json",
  //   "part_6.json",
  //   "part_7.json",
];
const transformINDB = (file) => {
  const data = [];
  for (const food of file) {
    let nutrient_data = {
      food_name: food.food_name,
    };
    const nutrients = Object.keys(food);
    for (const nutrient of nutrients) {
      if (keyMapINDB[nutrient]) {
        nutrient_data[keyMapINDB[nutrient]] = food[nutrient];
      }
    }
    data.push(nutrient_data);
  }
  return data;
};
const transformJSON = (file) => {
  //top level is array
  const data = [];
  for (const food of file) {
    // if (food.description.toLowerCase().includes("beef")) {
    //   continue;
    // }
    let servingSize = food.servingSize;
    let nutrient_data = {
      food_name: food.description,
      brand: food.brandOwner,
      serving_size: servingSize,
    };
    const nutrients = Object.keys(food.labelNutrients);
    for (const nutrient of nutrients) {
      if (keyMap[nutrient]) {
        nutrient_data[keyMap[nutrient]] =
          (food.labelNutrients[nutrient].value * 100) / servingSize;
      }
    }
    data.push(nutrient_data);
  }
  return data;
};
const procesFiles = () => {
  const outfilepath = path.join(__dirname, outfile);

  for (const file of filePaths) {
    const filepath = path.join(__dirname, file);

    const fileData = fs.readFileSync(filepath, "utf8");
    // console.log(`Processing file ${filepath}`);
    const jsonData = JSON.parse(fileData);
    //transform json for udsa transformINDB for indb
    const transformedData = transformJSON(jsonData);
    fs.appendFileSync(
      outfilepath,
      JSON.stringify(transformedData, null, 2),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log(`Finished processing ${filepath}`);
  }
};

const compressFile = () => {
  const foodData = path.join(__dirname, "FoodDataCompressed.bin");
  try {
    console.log("serializing data");
    const filedata = fs.readFileSync(path.join(__dirname, outfile));
    const serializedJSON = JSON.stringify(JSON.parse(filedata));
    console.log("starting Compression ", Date.now());
    const compressedData = brotli.compress(Buffer.from(serializedJSON), {
      mode: 0,
      quality: 11,
      lgwin: 22,
    });
    console.log(
      "Finished compression, buffer size = ",
      compressedData.byteLength,
      "\nFinised At ",
      Date.now()
    );
    fs.writeFileSync(foodData, compressedData, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

compressFile();
// procesFiles();
