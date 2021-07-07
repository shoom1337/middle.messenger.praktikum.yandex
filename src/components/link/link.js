import BaseComponent from "../baseComponent";
import tmpl from "./link.tmpl";
import "./link.scss";

class Input extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Input;
