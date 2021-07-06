import BaseComponent from "../baseComponent";
import tmpl from "./form.tmpl";
import "./form.scss";

class Form extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Form;
