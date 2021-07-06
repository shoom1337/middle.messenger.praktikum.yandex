import BaseTemplate from "../baseTemplate";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
  <a href="{{ href }}" class="link ${cn.g("link")}">{{ text }}</a>`;
  }
}

export default Template;
