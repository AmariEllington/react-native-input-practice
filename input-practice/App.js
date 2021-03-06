import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextScreen from "./components/TextScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TextScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
