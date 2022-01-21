import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MapContextProviders from "./src/contextProviders/MapContextProviders";

export default function App() {
  return (
    <MapContextProviders>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </MapContextProviders>
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
