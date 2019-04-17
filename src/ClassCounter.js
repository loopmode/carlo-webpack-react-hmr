import { hot } from "react-hot-loader";

import React, { Component } from "react";

class ClassCounter extends Component {
    state = {
        age: 0
    };
    componentDidMount() {
        this.intervalID = window.setInterval(() => this.count(), 1000);
    }
    componentWillUnmount() {
        window.clearInterval(this.intervalID);
    }
    count() {
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        return (
            <div {...this.props}>
                <p>This is a class-based component.</p>
                <p>Mounted {this.state.age} seconds ago.</p>
            </div>
        );
    }
}

const withHMR = hot(module);
export default withHMR(ClassCounter);
