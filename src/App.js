import { hot } from "react-hot-loader";
import React, { Component } from "react";

import FunctionalCounter from "./FunctionalCounter";
import ClassCounter from "./ClassCounter";

import css from "./App.scss";
class App extends Component {
    render() {
        return (
            <div className={css.App}>
                <h1>Carlo-React-App with HMR</h1>
                <ClassCounter className="Box" />
                <FunctionalCounter className="Box" />
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
