import React from "react";
import { Text, View } from "react-native";

const StarterComponent: React.FC = () => (
  <View style={{ padding: 16 }}>
    <Text>Esse aqui é um teste bacaninha</Text>
  </View>
);

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = (args: any) => <StarterComponent {...args} />;
GettingStarted.args = {};
GettingStarted.parameters = {
  noBackground: true,
};
