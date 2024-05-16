import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./components/LogIn";

export default function App() {
  return (
    <NavigationContainer>
      <LogIn />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
