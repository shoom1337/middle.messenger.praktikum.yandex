import BaseComponent from "../baseComponent";
import tmpl from "./panel-link.tmpl";
import "./panel-link.scss";

class PanelLink extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default PanelLink;
