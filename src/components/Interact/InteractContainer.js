import { h, Component } from 'preact';
import { getUsername, getLights, blink } from '../../services/HueService'

import Interact from './Interact'

export default class InteractContainer extends Component {
  componentWillMount() {
    const username = getUsername()
    if (username) {
      getLights()
      .then(() => this.setState({
        username
      }))
    }
  }
  render(props, state) {
    return (
      <div>
        { state.username && <Interact onInteract={() => blink()} /> }
      </div>
    )
  }
}