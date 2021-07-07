import BaseComponent from "../baseComponent";
import tmpl from "./card.tmpl";

class Card extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Card;
