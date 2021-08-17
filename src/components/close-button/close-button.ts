import Block from "../block";
import tmpl from "./close-button.tmpl";

type CloseButtonProps = {
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class CloseButton extends Block {
  constructor(props: CloseButtonProps) {
    super("fragment", props, tmpl);
  }
}

export { CloseButton, CloseButtonProps };
