import BaseTemplate from "../baseTemplate";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
  <a href="{{ href }}" class="panel-link ${cn.g()}">
    <img src="/public/arrow-circle.svg" class="panel-link__icon ${cn.g(
      "icon"
    )}" />
  </a>`;
  }
}

export default Template;
