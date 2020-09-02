const currentEnv =
  (process.env && process.env.NODE_ENV && process.env.NODE_ENV.trim()) ||
  "local";
var getAppConfig = (envName) => {
  var finalConfig = require("./config.json");
  if (envName) {
    try {
      var configTransform = require(`./config.${envName}.json`);
      if (configTransform) {
        finalConfig = Object.assign(finalConfig, configTransform);
      }
    } catch (e) {}
  }
  finalConfig.buildOn = new Date().toUTCString();
  finalConfig.buildFor = currentEnv;
  return finalConfig /* = { default: finalConfig }*/;
};
export default () => ({
  webpack: (config) => {
    let externalConfig = {
      config: JSON.stringify(getAppConfig(currentEnv)),
    };
    if (config.externals != null && !Array.isArray(config.externals)) {
      config.externals = [config.externals, externalConfig];
    } else {
      config.externals = (config.externals ?? []).concat(externalConfig);
    }
    return config;
  },
});
