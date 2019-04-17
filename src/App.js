import { hot } from "react-hot-loader";
import React, { Component } from "react";

import FunctionalCounter from "./FunctionalCounter";
import ClassCounter from "./ClassCounter";

class App extends Component {
    render() {
        const boxStyle = {
            margin: 5,
            padding: 5,
            border: "1px solid black",
            textAlign: "center"
        };

        return (
            <div style={boxStyle}>
                <h1>Carlo-React-App with HMR</h1>
                <ClassCounter style={boxStyle} />
                <FunctionalCounter style={boxStyle} />
                <p>
                    Change the contents of any file in <code>src/</code> to see
                    HMR in action without disrupting component state.
                </p>
            </div>
        );
    }
}

const withHMR = hot(module);
export default withHMR(App);
