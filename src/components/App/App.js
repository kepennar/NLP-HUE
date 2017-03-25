import { h } from "preact";
import { Layout } from "preact-mdl";

import "material-design-lite";

import Header from "../Header";
import Connect from "../Connect";
import Interact from "../Interact";
import NoBridge from "../NoBridge";

import "./App.scss";

const App = ({ noBridge }) => {
  return (
    <Layout fixed-header>
      <Header />

      <Layout.Content>
        <div class="heading flex">
          <h2>Welcome to NLP HUE</h2>
        </div>
        <div class="instructions flex">
          <p>Currently in dev.</p>
        </div>
        {noBridge
          ? <NoBridge />
          : <div>
              <Connect />
              <Interact />
            </div>}
      </Layout.Content>
    </Layout>
  );
};
export default App;
