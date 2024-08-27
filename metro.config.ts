import path from 'path';
import { getDefaultConfig } from 'expo/metro-config';
import { generate } from '@storybook/react-native/scripts/generate';

// Geração da configuração do Storybook
generate({
  configPath: path.resolve(__dirname, './.storybook'),
  useJs: true,
});

// Obter a configuração padrão do Metro
const defaultConfig = getDefaultConfig(__dirname);

// Configurar o Metro para suportar require.context se possível
const customConfig = {
  ...defaultConfig,
  transformer: {
    ...(defaultConfig.transformer || {}),
    unstable_allowRequireContext: true,
  },
};

export default customConfig;
