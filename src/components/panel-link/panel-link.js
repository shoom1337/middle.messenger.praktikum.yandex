import BaseComponent from "../baseComponent";
import Renderer from "../../utils/renderer";
import tmpl from "./panel-link.tmpl";
import "./panel-link.scss";

class PanelLink extends BaseComponent {
  render() {
    const template = new tmpl(this.className).generate();
    return new Renderer(template, this.data).render();
  }
}

export default PanelLink;
