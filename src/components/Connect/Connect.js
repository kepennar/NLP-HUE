import { h } from "preact";
import "./Connect.scss";

const Connect = props => {
  return (
    <div>
      <h2>Press bridge button</h2>
      <img src="./bridge.svg" />
      <button type="button" onclick={props.onConnect}> OK </button>
    </div>
  );
};

export default Connect;
