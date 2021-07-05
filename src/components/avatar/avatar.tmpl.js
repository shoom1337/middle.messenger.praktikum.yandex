import BaseTemplate from "../baseTemplate";
import "./avatar.scss";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
  <img src="/public/avatar.svg" class="avatar ${cn.g()}"/>`;
  }
}

export default Template;
