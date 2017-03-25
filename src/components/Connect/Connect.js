import { h } from "preact";
import { Card, Button } from "preact-mdl";

import "./Connect.scss";

const Connect = props => {
  return (
    <Card class="connect-card" shadow="3">
      <div>
        <h2>Press bridge button</h2>
        <img src="./bridge.svg" />
      </div>
      <Button colored raised onclick={props.onConnect}> OK </Button>
    </Card>
  );
};

export default Connect;
