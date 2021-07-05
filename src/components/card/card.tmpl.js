import BaseTemplate from "../baseTemplate";

class Template extends BaseTemplate {
  constructor(className, type) {
    super(className);

    this.type = type;
  }

  template({ cn }) {
    return `
  <div class="card ${cn.g()}">
  ${
    this.type !== "no-header"
      ? `<h1 class="card__title ${cn.g("title")}">{{ title }}</h1>`
      : ""
  }
    
    {{ content }}
  </div>`;
  }
}

export default Template;
