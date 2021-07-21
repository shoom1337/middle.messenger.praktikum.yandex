import BaseComponent from "../../components/baseComponent";
import tmpl from "./blank.tmpl";
import "./blank.scss";

import { BaseComponentProps } from "../../common/types";

class Layout extends BaseComponent {
  constructor({ data }: BaseComponentProps) {
    super({ data, tmpl });
  }
}

export default Layout;
