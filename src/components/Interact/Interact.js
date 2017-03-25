import { h } from "preact";
import { Card, Icon } from "preact-mdl";
import Light from "./Light";

const Interact = ({ lights, onInteract, onSwitchOn, onChange }) => (
  <Card shadow="3" class="wide" style="margin:auto">
    <Card.Title class>
      <Card.TitleText>Interact</Card.TitleText>
    </Card.Title>
    <Card.Text style="text-align:center">
      <Icon icon="light" style="display:block; font-size:100px;" />
    </Card.Text>
    <Card.Actions>
      {Object.entries(lights).map(([id, infos]) => (
        <Light id={id} infos={infos} onChange={onChange} />
      ))}
    </Card.Actions>
  </Card>
);

export default Interact;
