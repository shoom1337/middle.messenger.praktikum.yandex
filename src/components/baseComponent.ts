import Templator from "../utils/templator";

class BaseComponent {
  constructor({ data, tmpl }) {
    this.content = new Templator(tmpl).compile(data);
  }
}

export default BaseComponent;
