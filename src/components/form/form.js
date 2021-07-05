import BaseComponent from "../baseComponent";
import Renderer from "../../utils/renderer";
import tmpl from "./form.tmpl";
import "./form.scss";

class Form extends BaseComponent {
  render() {
    const template = new tmpl(this.className).generate();
    return new Renderer(template, this.data).render();
  }
}

export default Form;
