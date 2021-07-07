import BaseComponent from "../baseComponent";
import tmpl from "./form.tmpl";

class Form extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Form;
