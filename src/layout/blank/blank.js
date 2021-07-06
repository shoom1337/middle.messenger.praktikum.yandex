import BaseComponent from "../../components/baseComponent";
import tmpl from "./blank.tmpl";
import "./blank.scss";

class Layout extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Layout;
