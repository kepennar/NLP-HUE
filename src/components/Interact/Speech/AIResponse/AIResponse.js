import { h } from "preact";

export default ({ textResponse, display }) => (
  <div class="ai-response">
    {display
      ? <p class="text">{textResponse}<span>|</span></p>
      : <p><span>|</span></p>}
  </div>
);
