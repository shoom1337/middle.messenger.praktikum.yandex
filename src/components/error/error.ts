import BaseComponent from "../baseComponent";
import tmpl from "./error.tmpl";
import "./error.scss";

class Error extends BaseComponent {
  constructor({ data }) {
    super({ data, tmpl });
  }
}

export default Error;
