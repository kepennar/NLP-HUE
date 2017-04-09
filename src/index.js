import * as OfflinePluginRuntime from "offline-plugin/runtime";

import { h, render } from "preact";
import { Provider } from "preact-redux";

import store from "./store";
import "./index.scss";

if (process.env.NODE_ENV === "production") {
  OfflinePluginRuntime.install();
}

function init() {
  let App = require("./components/App").default;
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body,
    document.body.lastElementChild
  );
}

init();

if (module.hot) {
  require("preact/devtools");

  module.hot.accept("./components/App", () =>
    window.requestAnimationFrame(() => {
      init();
    }));
}
