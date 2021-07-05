import BaseLayout from "../baseLayout";
import Renderer from "../../utils/renderer";
import tmpl from "./gradient.tmpl";
import "./gradient.scss";

class Layout extends BaseLayout {
  render() {
    const template = new tmpl(this.className).generate();
    return new Renderer(template, this.data).render();
  }
}

export default Layout;
