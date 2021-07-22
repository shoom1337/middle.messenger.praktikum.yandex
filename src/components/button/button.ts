import Block from "../block";
import tmpl from "./button.tmpl";
import "./button.scss";

type ButtonProps = {
  text: string,
};

class Button extends Block {
  constructor(props: ButtonProps) {
    super("fragment", props, tmpl);
  }
}

export { Button, ButtonProps };
