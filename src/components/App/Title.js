import { h } from "preact";
import { LayoutTitle } from "preact-mdl";

export default () => (
  <LayoutTitle class="app-title">
    <div class="mdl-typography--display-4">
      <h2>Welcome to NLP HUE</h2>
    </div>
    <div class="instructions flex">
      <p>Currently in dev.</p>
    </div>
  </LayoutTitle>
);
