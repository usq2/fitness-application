import AppLogo from "../../../assets/logos/common_logos/AppLogo";
import FitBodyLogo from "../../../assets/logos/common_logos/FitBodyLogo";
import CommunityLogo from "../../../assets/logos/common_logos/CommunityLogo";
import NutritionLogo from "../../../assets/logos/common_logos/NutritionLogo";
import RunningLogo from "../../../assets/logos/common_logos/RunningLogo";
import SkipLogo from "../../../assets/logos/common_logos/SmallRightTriangle";

export const ONBOARDING_SCREEN_DATA = [
  {
    backgroundImage: require("../../../assets/logos/on_boarading_logos/boarding_image_1.png"),
    text: "Welcome to",
    textStyle: {
      color: "#E2F163",
      fontWeight: "700",
      fontSize: 25,
      textAlign: "center",
    },
    commonLogosStyle: {},
    appLogosStyle: { marginVertical: 10 },
    AppLogos: AppLogo,
    CommonLogos: FitBodyLogo,
    isFirstScreen: true,
    id: "1",
  },
  {
    backgroundImage: require("../../../assets/logos/on_boarading_logos/boarding_image_2.png"),
    text: "Start Your Journey Toward a More Active Life Style",
    AppLogos: null,
    CommonLogos: RunningLogo,
    commonLogosStyle: { marginVertical: 10 },
    button_text: "Next",
    showSkip: true,
    SkipLogo: SkipLogo,
    skipText: "Skip",
    id: "2",
    textStyle: {
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: 20,
      textAlign: "center",
    },
  },
  {
    backgroundImage: require("../../../assets/logos/on_boarading_logos/boarding_image_3.png"),
    text: "Find Nutrition Tips that Fit your LifeStyle",
    AppLogos: null,
    CommonLogos: NutritionLogo,
    commonLogosStyle: { marginVertical: 10 },
    button_text: "Next",
    textStyle: {
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: 20,
      textAlign: "center",
    },
    skipText: "Skip",
    showSkip: true,
    SkipLogo: SkipLogo,
    id: "3",
  },
  {
    backgroundImage: require("../../../assets/logos/on_boarading_logos/boarding_image_4.png"),
    text: "A Community For You, Challenge Yourself",
    AppLogos: "",
    CommonLogos: CommunityLogo,
    commonLogosStyle: { marginVertical: 10 },
    button_text: "Get Started",

    id: "4",
    textStyle: {
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: 20,
      textAlign: "center",
    },
  },
];
