import BaseComponent from "../baseComponent";
import Renderer from "../../utils/renderer";
import tmpl from "./avatar.tmpl";
import "./avatar.scss";

class Input extends BaseComponent {
  render() {
    const template = new tmpl(this.className).generate();
    return new Renderer(template, this.data).render();
  }
}

export default Input;
