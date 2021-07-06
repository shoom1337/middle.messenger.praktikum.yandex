import Templator from "../utils/templator";

class BaseComponent {
  constructor({ data, type = "", variant, tmpl } = { data: {} }) {
    this.className = "123";
    this.data = data;
    this.type = type;
    this.variant = variant;

    this.content = new Templator(tmpl).compile(this.data);
  }
}

export default BaseComponent;
