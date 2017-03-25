import { h } from "preact";
import { Card, Icon } from "preact-mdl";
import Bulb from "./Bulb";

const Interact = ({ bulbs, onInteract, onSwitchOn, onChange }) => (
  <Card shadow="3">
    <Card.Title class>
      <Card.TitleText>Bulbs</Card.TitleText>
    </Card.Title>
    <Card.Text style="text-align:center">
      <Icon icon="lightbulb_outline" style="display:block; font-size:100px;" />
    </Card.Text>
    <Card.Actions>
      {Object.entries(bulbs).map(([id, infos]) => (
        <Bulb id={id} infos={infos} onChange={onChange} />
      ))}
    </Card.Actions>
  </Card>
);

export default Interact;