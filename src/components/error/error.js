import BaseComponent from "../baseComponent";
import Renderer from "../../utils/renderer";
import tmpl from "./error.tmpl";
import "./error.scss";

class Error extends BaseComponent {
  render() {
    const template = new tmpl(this.className).generate();
    return new Renderer(template, this.data).render();
  }
}

export default Error;
