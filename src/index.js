import * as OfflinePluginRuntime from "offline-plugin/runtime";
import { h, render } from "preact";
import "./index.scss";

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}

let root;
function init() {
  let App = require("./components/App").default;
  root = render(<App />, document.querySelector("#app"), root);
}

init();

if (module.hot) {
  module.hot.accept(
    "./components/App",
    () => window.requestAnimationFrame(() => {
      init();
    })
  );
}
