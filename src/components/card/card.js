import BaseComponent from "../baseComponent";
import Renderer from "../../utils/renderer";
import tmpl from "./card.tmpl";
import "./card.scss";

class Card extends BaseComponent {
  render() {
    const template = new tmpl(this.className, this.type).generate();
    return new Renderer(template, this.data).render();
  }
}

export default Card;
