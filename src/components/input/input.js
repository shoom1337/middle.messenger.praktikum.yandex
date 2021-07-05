import BaseComponent from "../baseComponent";
import Renderer from "../../utils/renderer";
import tmpl from "./input.tmpl";
import "./input.scss";

class Input extends BaseComponent {
  render() {
    const template = new tmpl(this.className, this.type, this.variant).generate(
      this.data.error
    );
    return new Renderer(template, this.data).render();
  }
}

export default Input;
