import { h } from "preact";
import { Card, Icon, Button } from "preact-mdl";

const Speech = ({ onClick }) => (
  <Card shadow="3">
    <Card.Title class>
      <Card.TitleText>Voice</Card.TitleText>
    </Card.Title>
    <Card.Text style="text-align:center">
      <Icon icon="settings_voice" style="display:block; font-size:100px;" />
    </Card.Text>
    <Card.Actions>
      <Button fab onClick={onClick}>
        <Icon icon="check" />
      </Button>
    </Card.Actions>
  </Card>
);
export default Speech;
