import { hot } from "react-hot-loader";
import React from "react";

function FunctionalCounter(props) {
    const [count, setCount] = React.useState(0);
    const savedCallback = React.useRef();

    function callback() {
        setCount(count + 1);
    }

    React.useEffect(() => {
        savedCallback.current = callback;
    });

    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = window.setInterval(tick, 1000);
        return () => window.clearInterval(id);
    }, []);

    return (
        <div {...props}>
            <p>This is a functional component.</p>
            <p>Mounted {count} seconds ago.</p>
        </div>
    );
}

const withHMR = hot(module);
export default withHMR(FunctionalCounter);
