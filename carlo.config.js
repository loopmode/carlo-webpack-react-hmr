const { withExtensions } = require("carlo-extensions");

module.exports = {
    webpack: {
        config: require("./webpack.config.js")
    },
    carlo: {
        launch: withExtensions(
            [require("@npm-chrome-extensions/react-devtools")],
            {
                args: ["--auto-open-devtools-for-tabs"]
            }
        )
    }
};
