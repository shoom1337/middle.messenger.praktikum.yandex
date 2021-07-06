import BaseLayout from "../baseLayout";
import Renderer from "../../utils/renderer";
import tmpl from "./blank.tmpl";
import "./blank.scss";

class Layout extends BaseLayout {
  render() {
    const template = new tmpl(this.className).generate();
    return new Renderer(template, this.data).render();
  }
}

export default Layout;
