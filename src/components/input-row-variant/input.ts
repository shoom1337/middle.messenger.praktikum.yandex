import BaseComponent from "../baseComponent";
import tmpl from "./input.tmpl";
import "./input.scss";

import { BaseComponentProps } from "../../common/types";

class Input extends BaseComponent {
  constructor({ data }: BaseComponentProps) {
    super({ data, tmpl });
  }
}

export default Input;
