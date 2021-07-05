import BaseTemplate from "../baseTemplate";
import ClassNames from "../../utils/classnames";

class Template extends BaseTemplate {
  template({ cn, error }) {
    const isError = !!error;
    const variant = this.variant;
    let addCN;
    if (variant) {
      addCN = new ClassNames(`input-${variant}`);
    }
    return `
  <div class="input-wrapper ${cn.g()} ${
      isError ? "input-wrapper__error" : ""
    } ${variant ? addCN.g() : ""}">
    <label class="input-label ${cn.g("label")} ${
      isError ? "input-label__error" : ""
    } ${variant ? addCN.g("label") : ""}">
      {{ label }}
      <input value="{{ value }}"  class="input-input ${cn.g("input")} ${
      isError ? "input-input__error" : ""
    } ${variant ? addCN.g("input") : ""}" type="{{ type }}" name="{{ name }}"/>

    ${
      isError
        ? "<span class='input-error-message'>{{ error.message }}</span>"
        : ""
    }
    </label>
  </div>`;
  }
}

export default Template;
