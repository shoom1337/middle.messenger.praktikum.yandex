import BaseComponent from "../baseComponent";
import tmpl from "./form.tmpl";

import { BaseComponentProps } from "../../common/types";

class Form extends BaseComponent {
  constructor({ data }: BaseComponentProps) {
    super({ data, tmpl });
  }
}

export default Form;
