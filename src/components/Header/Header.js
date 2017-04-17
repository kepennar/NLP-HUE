import { h } from "preact";
import { Layout } from "preact-mdl";

import "./Header.scss";

const Header = ({ collapsed }) => {
  const className = `mdl-layout__header--transparent ${collapsed ? "collapse" : ""}`;
  return (
    <Layout.Header class={className}>
      <Layout.HeaderRow>
        <Layout.Title>
          {collapsed ? "NLP HUE" : "Welcome to NLP HUE"}
        </Layout.Title>
      </Layout.HeaderRow>
    </Layout.Header>
  );
};
export default Header;
