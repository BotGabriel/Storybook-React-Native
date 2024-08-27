import { ExpoConfig } from '@expo/config'; // Verifique a importação correta, pode ser necessário instalar @expo/config
import { ConfigContext } from '@expo/config'; // Importar o contexto de configuração se disponível

// Defina a interface para configuração extra
interface ExtraConfig {
  storybookEnabled?: string;
}

// Defina a interface para a configuração completa
interface CustomExpoConfig extends ExpoConfig {
  extra?: ExtraConfig;
}

// Função para retornar a configuração personalizada
export default ({ config }: { config: CustomExpoConfig }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
