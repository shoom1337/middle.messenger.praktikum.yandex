import BaseComponent from "../baseComponent";
import tmpl from "./card.tmpl";

import { CardProps } from "../../common/types";

class Card extends BaseComponent {
  constructor({ data }: CardProps) {
    super({ data, tmpl });
  }
}

export default Card;
