import BaseComponent from "../../components/baseComponent";
import tmpl from "./gradient.tmpl";
import "./gradient.scss";

class Layout extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Layout;
