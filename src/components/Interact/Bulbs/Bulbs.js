import { h } from "preact";
import { Card, Icon } from "preact-mdl";

import Bulb from "./Bulb";
import "./Bulbs.scss";

const Bulbs = ({ bulbs, getBulbs }) => (
  <Card shadow="3" class="bulb-card">
    <Card.Title class>
      <Card.TitleText>Bulbs</Card.TitleText>
    </Card.Title>
    <Card.Text style="text-align:center">
      <Icon icon="lightbulb_outline" style="display:block; font-size:100px;" />
    </Card.Text>
    <Card.Actions>
      {Object.entries(bulbs).map(([id, infos]) => (
        <Bulb key={id} id={id} infos={infos} update={getBulbs} />
      ))}
    </Card.Actions>
  </Card>
);

export default Bulbs;
