import BaseTemplate from "../baseTemplate";
import avatar from "../../../static/avatar.svg";
import "./avatar.scss";

class Template extends BaseTemplate {
  template({ cn }) {
    return `<img src="${avatar}" class="avatar ${cn.g()}"/>`;
  }
}

export default Template;
