import BaseComponent from "../baseComponent";
import tmpl from "./button.tmpl";
import "./button.scss";

import { ButtonProps } from "../../common/types";

class Button extends BaseComponent {
  constructor({ data }: ButtonProps) {
    super({ data, tmpl });
  }
}

export default Button;
