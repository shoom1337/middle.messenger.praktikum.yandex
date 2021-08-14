import Block from "../block";
import tmpl from "./burger-button.tmpl";

type BurgerButtonProps = {
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class BurgerButton extends Block {
  constructor(props: BurgerButtonProps) {
    super("button", props, tmpl);
  }
}

export { BurgerButton, BurgerButtonProps };
