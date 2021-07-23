import Block from "../block";
import tmpl from "./button.tmpl";
import "./button.scss";

type ButtonProps = {
  text: string,
  events?: {
    [key: string]: (event: Event) => void,
  },
};

class Button extends Block {
  constructor(props: ButtonProps) {
    super("fragment", props, tmpl);
  }
}

export { Button, ButtonProps };
