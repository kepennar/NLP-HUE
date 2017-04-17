import expect from "expect";
import { h, render } from "preact";
import { Provider } from "preact-redux";

import App from "src/components/App/AppContainer";
import store from "src/store";

describe("App component", () => {
  let node;

  before(() => {
    node = document.createElement("div");
    (document.body || document.documentElement).appendChild(node);
  });
  beforeEach(() => {
    node.innerHTML = "";
  });

  after(() => {
    node.parentNode.removeChild(node);
    node = null;
  });

  it("displays a welcome message", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      node
    );
    expect(node.querySelector(".mdl-layout-title").textContent).toBe(
      "Welcome to NLP HUE"
    );
  });
});
