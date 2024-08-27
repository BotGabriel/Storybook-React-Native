import React from "react";
import { View } from "react-native";
import { Preview, Decorator } from "@storybook/react";

// Define o objeto preview com tipos TypeScript adequados
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    ((Story, context) => (
      <View
        style={{
          flex: 1,
          backgroundColor:
            context.parameters.noBackground === true ? undefined : "#26c6da",
          padding: 8,
        }}
      >
        <Story />
      </View>
    )) as Decorator,
  ],
};

export default preview;
