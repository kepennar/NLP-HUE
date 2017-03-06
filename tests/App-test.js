import expect from "expect";
import { h, render } from "preact";

import App from "src/components/App/App";

describe("App component", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    render(null, node);
  });

  it("displays a welcome message", () => {
    render(<App />, node);
    expect(node.querySelector('h2').textContent).toBe("Welcome to NLP HUE");
  });
});
