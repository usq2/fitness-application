import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OnBoardingScreen from "./src/screens/on_boarding/OnBoardingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <OnBoardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
