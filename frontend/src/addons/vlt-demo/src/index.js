
const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['nl'],
    defaultLanguage: 'nl',
  };
  return config;
};

export default applyConfig;
