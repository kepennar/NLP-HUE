import { h } from "preact";
import { Card, Button } from "preact-mdl";

import "./Connect.scss";

const Connect = () => (
  <Card class="connect-card" shadow="3">
    <Card.Title class>
      <Card.TitleText>Press bridge button</Card.TitleText>
    </Card.Title>
    <img src="./bridge.svg" />
  </Card>
);

export default Connect;
