import ClassNames from "../utils/classnames";

class BaseTemplate {
  constructor(className, type = "", variant = "") {
    this.className = className;
    this.cn = new ClassNames(className);
    this.type = type;
    this.variant = variant;
  }

  generate(error = null) {
    return this.template({ cn: this.cn, error: error, variant: this.variant });
  }
}

export default BaseTemplate;
