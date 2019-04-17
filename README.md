# carlo-webpack-react-hmr

This is a boilerplate repo for a carlo-based app with react, webpack, webpack-dev-server and HMR.

Carlo allows us to build native apps that run in Chrome. However, what makes it different from Electron is that it doesn't bundle its own browser instance, but instead relies on Chrome or Chromium being already installed on the system.

Based on [carlo](https://www.npmjs.com/package/carlo), [carlo-webpack](https://www.npmjs.com/package/carlo-webpack) and [react-hot-loader](https://www.npmjs.com/package/react-hot-loader).

## Prerequisites

-   [Chrome](https://www.google.com/chrome/) or [Chromium](https://www.chromium.org/getting-involved/download-chromium) must be installed
-   [Node.js](https://nodejs.org/en/download/) must be installed

## Installation

```bash
git clone https://github.com/loopmode/carlo-webpack-react-hmr.git
cd carlo-webpack-react-hmr
npm install
```

### Development

Start the development environment:

```bash
npm start
```

## HMR and react-hot-loader

The setup works now, but a few changes to the default or recommended setup were necessary.

### react-dom patch

The only way to effectively patch `react-dom` was the [yarn name resolution](https://github.com/gaearon/react-hot-loader#react--dom) method (having `react-dom@npm:@hot-loader/react-dom` as a dependency).  
None of the other described methods worked in this setup - the console warning about unpatched react-dom kept showing up.

### marking as "hot"

The default method of marking components as "hot" did not work:

```jsx
// this does not work
import { hot } from 'react-hot-loader/root';
...
export default hot(App);
```

However, the method described in [#1082](https://github.com/gaearon/react-hot-loader/issues/1082) does work:

```jsx
// this works
import { hot } from "react-hot-loader";
...
const withHMR = hot(module);
export default withHMR(App);
```

### webpack-dev-server hotOnly

In order to get rid of the [`maximum call stack size`](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#uncaught-rangeerror-maximum-call-stack-size-exceeded) error, it was necessary to switch the webpack dev server from `hot` to `hotOnly`:

```js
    devServer: {
        hot: false,
        hotOnly: true
    }
```

Without that, while HMR itself works just fine, the error happens after each hot reload and is displayed in the console.
