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
  <main class="blank-layout ${cn.g("layout")}">
    {{ content }}
  </main>`;
  }
}

export default Template;
