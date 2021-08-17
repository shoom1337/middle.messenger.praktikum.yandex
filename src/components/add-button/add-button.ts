import Block from "../block";
import tmpl from "./add-button.tmpl";

type AddButtonProps = {
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class AddButton extends Block {
  constructor(props: AddButtonProps) {
    super("fragment", props, tmpl);
  }
}

export { AddButton, AddButtonProps };
