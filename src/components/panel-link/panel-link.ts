import BaseComponent from "../baseComponent";
import tmpl from "./panel-link.tmpl";
import "./panel-link.scss";

import { BaseComponentProps } from "../../common/types";

class PanelLink extends BaseComponent {
  constructor({ data }: BaseComponentProps) {
    super({ data, tmpl });
  }
}

export default PanelLink;
