import BaseComponent from "../baseComponent";
import tmpl from "./link.tmpl";
import "./link.scss";

import { BaseComponentProps } from "../../common/types";

class Input extends BaseComponent {
  constructor({ data }: BaseComponentProps) {
    super({ data, tmpl });
  }
}

export default Input;
