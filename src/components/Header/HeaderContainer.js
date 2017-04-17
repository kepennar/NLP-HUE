import { h, Component } from "preact";
import { connect } from "preact-redux";

import Header from "./Header";

class HeaderContainer extends Component {
  render({ collapsed }) {
    return <Header collapsed={collapsed} />;
  }
}

export default connect(state => ({ ...state.ui }))(HeaderContainer);
