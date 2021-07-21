import { BaseComponentProps } from "../common/types";
import Templator from "../utils/templator";

class BaseComponent {
  content: string;
  constructor({ data, tmpl }: BaseComponentProps) {
    this.content = new Templator(tmpl).compile(data);
  }
}

export default BaseComponent;
