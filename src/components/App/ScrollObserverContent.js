import { h } from "preact";
import { Layout } from "preact-mdl";

const OPTS = { passive: true };
export default class ScrollObserverContent {
  update = () => {
    const base = this.content.base;
    const event = {
      get offset() {
        return base.scrollTop;
      },
      get max() {
        return base.scrollHeight;
      }
    };
    this.props.onScroll(event);
  };

  componentDidMount() {
    this.content.base.addEventListener("scroll", this.update, OPTS);
  }

  componentWillUnmount() {
    this.content.base.removeEventListener("scroll", this.update, OPTS);
  }

  render({ children: [child] }) {
    return (
      <Layout.Content
        ref={content => {
          this.content = content;
        }}
      >
        {typeof child === "function" ? child() : child}
      </Layout.Content>
    );
  }
}
