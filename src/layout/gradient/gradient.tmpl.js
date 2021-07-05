import ClassNames from "../../utils/classnames";

class Template {
  constructor(className) {
    this.className = className;
    this.cn = new ClassNames(className);
  }

  generate() {
    return this.template(this.cn);
  }

  template(cn) {
    return `
  <div class="gradient-layout ${cn.g()}">
    {{ content }}
  </div>`;
  }
}

export default Template;
