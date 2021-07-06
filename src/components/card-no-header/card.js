import BaseComponent from "../baseComponent";
import tmpl from "./card.tmpl";
import "./card.scss";

class Card extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Card;
