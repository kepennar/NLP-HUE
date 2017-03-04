import { h, Component } from 'preact';
import { getBridgeIp } from '../../services/HueService'

import App from './App'

export default class AppContainer extends Component {
  componentWillMount() {
    getBridgeIp()
    .then(() => this.setState({loaded: true}))
  }

  render(props, state) {
    return (
      <div>
        { state.loaded && <App /> }
      </div>
    )
  }
}