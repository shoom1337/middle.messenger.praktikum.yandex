import Block from "../block";
import tmpl from "./dots-button.tmpl";

import "./dots-button.scss";

type DotsButtonProps = {
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class DotsButton extends Block {
  constructor(props: DotsButtonProps) {
    super("fragment", props, tmpl);
  }
}

export { DotsButton, DotsButtonProps };
