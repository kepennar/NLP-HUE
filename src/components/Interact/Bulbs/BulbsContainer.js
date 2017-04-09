import { h, Component } from "preact";
import { connect } from "preact-redux";
import { omit } from "rambda";

import { getBulbs } from "../../../store/bulbs";

import Bulbs from "./Bulbs";

class BulbsContainer extends Component {
  async componentWillMount() {
    const { username, getBulbs, nbBulbs } = this.props;
    if (username && !nbBulbs) {
      getBulbs();
    }
  }

  render({ getBulbs, bulbs }) {
    return bulbs.nbBulbs
      ? <Bulbs bulbs={omit("nbBulbs", bulbs)} />
      : <span>Loading...</span>;
  }
}
export default connect(
  state => ({ bulbs: state.bulbs, username: state.user.username }),
  { getBulbs }
)(BulbsContainer);
