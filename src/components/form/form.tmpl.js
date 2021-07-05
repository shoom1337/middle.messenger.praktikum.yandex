import BaseTemplate from "../baseTemplate";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
  <form class="form ${cn.g()}" method="">
    {{ content }}
  </form>`;
  }
}

export default Template;
