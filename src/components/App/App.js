import { h } from 'preact'

import Connect from '../Connect'
import Interact from '../Interact'
import './App.css'

const App = () => {
  return <div className="App">
    <div className="App-heading App-flex">
      <h2>Welcome to NLP HUE</h2>
    </div>
    <div className="App-instructions App-flex">
      <p>Currently in dev.</p>
    </div>
    <Connect />
    <Interact />
  </div>
}
export default App