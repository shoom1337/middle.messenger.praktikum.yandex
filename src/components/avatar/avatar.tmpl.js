import BaseTemplate from "../baseTemplate";
import "./avatar.scss";
import icon from "url:../../../public/arrow-circle.svg";

class Template extends BaseTemplate {
  template({ cn }) {
    return `<img src="/public/avatar.svg" class="avatar ${cn.g()}"/>`;
  }
}

export default Template;
