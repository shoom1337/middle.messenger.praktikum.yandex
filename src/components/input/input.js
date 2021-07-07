import BaseComponent from "../baseComponent";
import tmpl from "./input.tmpl";
import "./input.scss";

class Input extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Input;
