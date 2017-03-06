import annyang from "annyang";
import { blink } from "./HueService";

export function init() {
  // Add our commands to annyang
  annyang.addCommands({
    oops: () => blink(),
    hello: () => blink()
  });

  // Start listening.
  annyang.start();
}
