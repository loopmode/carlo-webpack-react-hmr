import React from "react";
import ReactDOM from "react-dom";

const element = document.createElement("div");
element.id = "app";
document.body.appendChild(element);

function renderApp() {
    const { default: App } = require("./App");
    ReactDOM.render(<App />, element);
}

renderApp();
