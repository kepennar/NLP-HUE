import { h } from "preact";
import { Card, Icon } from "preact-mdl";

import Bulb from "./Bulb";
import "./Bulbs.scss";

export default ({ bulbs, getBulbs }) => (
  <Card shadow="3" class="wide-card">
    <Card.Title class>
      <Card.TitleText>Bulbs</Card.TitleText>
    </Card.Title>
    <Card.Text class="txt-center">
      <Icon
        icon="lightbulb_outline"
        class="card-icon mdl-color-text--blue-800"
      />
    </Card.Text>
    <Card.Actions>
      {Object.entries(bulbs).map(([id, infos]) => (
        <Bulb key={id} id={id} infos={infos} />
      ))}
    </Card.Actions>
  </Card>
);
