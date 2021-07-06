import BaseTemplate from "../baseTemplate";
import icon from "../../../static/arrow-circle.svg";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
  <a href="{{ href }}" class="panel-link ${cn.g()}">
    <img src="${icon}" class="panel-link__icon ${cn.g("icon")}" />
  </a>`;
  }
}

export default Template;
