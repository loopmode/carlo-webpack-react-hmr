const carloWebpack = require("carlo-webpack");
const carloWebpackOptions = require("./carlo.config");

async function main() {
    const { runDevServer, launch } = await carloWebpack(carloWebpackOptions);
    await runDevServer();
    await launch();
}

main();
