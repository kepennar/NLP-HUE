import { h } from 'preact'

import Connect from '../Connect'
import Interact from '../Interact'
import NoBridge from './NoBridge'

import './App.css'

const App = ({ noBridge }) => {
  return (
    <div class="App">
      <div class="App-heading App-flex">
        <h2>Welcome to NLP HUE</h2>
      </div>
      <div class="App-instructions App-flex">
        <p>Currently in dev.</p>
      </div>
      <Connect />
      
      { noBridge ? <NoBridge /> :
        <div>
          <Connect />
          <Interact />
        </div>
      }
    </div>
  )
}
export default App