import { h } from "preact";
import { Card, Icon, Button } from "preact-mdl";

const Speech = ({ isListening, onClick }) => (
  <Card shadow="3" class="wide-card">
    <Card.Title class>
      <Card.TitleText>Voice</Card.TitleText>
    </Card.Title>
    <Card.Text class="txt-center">
      <Icon
        icon="settings_voice"
        class={
          `card-icon ${isListening ? "mdl-color-text--green" : "mdl-color-text--grey"}`
        }
      />
    </Card.Text>
    <Card.Actions>
      <Button
        fab
        onClick={onClick}
        class={isListening ? "mdl-color-text--green" : "mdl-color-text--grey"}
      >
        <Icon icon="check" />
      </Button>
    </Card.Actions>
  </Card>
);
export default Speech;
