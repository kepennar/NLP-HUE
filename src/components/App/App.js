import { h } from "preact";

import Connect from "../Connect";
import Interact from "../Interact";
import NoBridge from "./NoBridge";

import "./App.scss";

const App = ({ noBridge }) => {
  return (
    <div class="app">
      <div class="heading flex">
        <h2>Welcome to NLP HUE</h2>
      </div>
      <div class="instructions flex">
        <p>Currently in dev.</p>
      </div>
      <Connect />

      {noBridge
        ? <NoBridge />
        : <div>
            <Connect />
            <Interact />
          </div>}
    </div>
  );
};
export default App;
