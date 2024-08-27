import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";

// Define the types for StorybookUI configuration if needed
interface Storage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
}

// Assuming `view.getStorybookUI` takes an object with a `storage` property
const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  } as Storage,
});

export default StorybookUIRoot;
