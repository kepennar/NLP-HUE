import { h } from "preact";
import { Layout } from "preact-mdl";

import "material-design-lite";

import ScrollObserverContent from "./ScrollObserverContent";
import Header from "../Header";
import Connect from "../Connect";
import Interact from "../Interact";
import NoBridge from "../NoBridge";

import "./App.scss";

const App = ({ noBridge, connected, onScroll }) => {
  return (
    <Layout fixed-header>
      <Header />
      <ScrollObserverContent onScroll={onScroll}>
        <div>
          {noBridge && <NoBridge />}
          {noBridge || <Connect />}
          {connected && <Interact />}
        </div>
      </ScrollObserverContent>
    </Layout>
  );
};
export default App;
