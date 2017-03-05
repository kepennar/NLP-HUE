import { h, Component } from 'preact';
import { getBridgeIp } from '../../services/HueService'

import App from './App'

export default class AppContainer extends Component {
  async componentWillMount() {
    await getBridgeIp()
    this.setState({loaded: true})
  }

  render({ }, { loaded }) {
    return (
      <div>
        { loaded && <App /> }
      </div>
    )
  }
}