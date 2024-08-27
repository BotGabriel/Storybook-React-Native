import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

// Defina o componente StarterComponent (substitua pelo componente real se necessário)
const StarterComponent: React.FC = () => (
  <View style={styles.container}>
    {/* Substitua pelo conteúdo real do StarterComponent */}
  </View>
);

function App() {
  return <StarterComponent />;
}

// Tipar AppEntryPoint como React.ComponentType
let AppEntryPoint: React.ComponentType = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  // Importação dinâmica para carregar Storybook apenas se necessário
  const StorybookRoot = React.lazy(() => import("./.storybook"));
  AppEntryPoint = () => (
    <React.Suspense
      fallback={
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      }
    >
      <StorybookRoot />
    </React.Suspense>
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

export default AppEntryPoint;
