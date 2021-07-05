import BaseTemplate from "../baseTemplate";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
  <button class="btn ${cn.g()}">{{ text }}</button>`;
  }
}

export default Template;
