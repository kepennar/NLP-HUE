import { h, Component } from "preact";
import { connect } from "preact-redux";

import Header from "./Header";

class HeaderContainer extends Component {
  render({ headerHeight }) {
    return <Header height={headerHeight} collapsed={headerHeight < 60} />;
  }
}

export default connect(state => ({ ...state.ui }))(HeaderContainer);
