import { h } from "preact";
import { Layout } from "preact-mdl";

import "material-design-lite";

import Header from "../Header";
import Title from "./Title";
import Connect from "../Connect";
import Interact from "../Interact";
import NoBridge from "../NoBridge";

import "./App.scss";

const App = ({ noBridge, connected }) => {
  return (
    <Layout fixed-header>
      <Header />
      <Title />
      <Layout.Content>
        {noBridge && <NoBridge />}
        {noBridge || <Connect />}
        {connected && <Interact />}
      </Layout.Content>
    </Layout>
  );
};
export default App;
