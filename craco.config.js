const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#222222",
              // "@table-title-bg": "#353535",
              // "@table-title-color": "white",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
