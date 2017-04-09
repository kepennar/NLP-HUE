import annyang from "annyang";
import { getLights, blink } from "./HueService";

// const action = () => blink().then(getLights);
const action = () => console.log('todo');

export function init() {
  // Add our commands to annyang
  annyang.addCommands({
    oops() {
      action();
    },
    hello() {
      action();
    }
  });

  // Start listening.
  annyang.start();
}
