import BaseComponent from "../baseComponent";
import tmpl from "./avatar.tmpl";

import "./avatar.scss";

class Avatar extends BaseComponent {
  constructor() {
    super({ tmpl });
  }
}

export default Avatar;
