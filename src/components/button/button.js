import BaseComponent from "../baseComponent";
import tmpl from "./button.tmpl";
import "./button.scss";

class Button extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Button;
