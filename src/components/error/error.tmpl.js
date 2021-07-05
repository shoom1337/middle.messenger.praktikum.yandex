import BaseTemplate from "../baseTemplate";

class Template extends BaseTemplate {
  template({ cn }) {
    return `
    <div class="error-wrapper ${cn.g()}">
      <h1 class="error__status ${cn.g("status")}">{{ status }}</h1>
      <p class="error__message ${cn.g("message")}">{{ message }}</p>
    </div>
    `;
  }
}

export default Template;
