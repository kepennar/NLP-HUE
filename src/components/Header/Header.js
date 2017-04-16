import { h } from "preact";
import { Layout } from "preact-mdl";

import "./Header.scss";

const Header = ({ collapsed, height }) => {
  return (
    <Layout.Header
      class="mdl-layout__header--transparent"
      style={{ height, opacity: Math.max(height / 200, 0.4) }}
    >
      <Layout.HeaderRow>
        <Layout.Title>
          {collapsed ? "NLP HUE" : "Welcome to NLP HUE"}
        </Layout.Title>
      </Layout.HeaderRow>
    </Layout.Header>
  );
};
export default Header;
