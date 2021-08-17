import Block from "../block";
import defaultTmpl from "./input.tmpl";
import rowTmpl from "./input-row.tmpl";
import messageTmpl from "./input-message.tmpl";
import "./input.scss";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  variant?: "row" | "default" | "message";
  error?: string;
  events?: {
    [key: string]: (event?: Event) => void;
  };
};

const VALIDATION_REGEXP = {
  LOGIN: /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
  EMAIL: /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/,
  // eslint-disable-next-line no-useless-escape
  PHONE: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
};

class Input extends Block {
  isValid: boolean;

  constructor({
    label,
    name,
    type = "text",
    variant = "default",
    events = {},
    error = "Поле заполнено не верно",
  }: InputProps) {
    let tmpl;
    switch (variant) {
      case "row":
        tmpl = rowTmpl;
        break;
      case "message":
        tmpl = messageTmpl;
        break;
      default:
        tmpl = defaultTmpl;
        break;
    }

    super("fragment", { label, name, type, events, error }, tmpl);

    this.isValid = false;
  }

  validate(): void {
    this.isValid = this._validate();
    if (!this.isValid) {
      this._addErrorClass();
      return;
    }
    this._removeErrorClass();
  }

  getValue(): string {
    const input = this.getContent().getElementsByTagName("input")[0];
    return input.value;
  }

  _validate(): boolean {
    const value = this.getValue();
    switch (this.props.name) {
      case "login": {
        return VALIDATION_REGEXP.LOGIN.test(value) && value.length >= 2;
      }
      case "email": {
        return VALIDATION_REGEXP.EMAIL.test(value) && value.length > 5;
      }
      case "first_name":
      case "second_name":
      case "display_name": {
        return value.length >= 2;
      }
      case "phone": {
        return VALIDATION_REGEXP.PHONE.test(value);
      }
      case "password": {
        return value.length >= 5;
      }
      case "password-confirm": {
        const passwordInput = <HTMLInputElement>document.querySelector("input[name=newPassword]");
        if (passwordInput !== null) {
          return passwordInput.value === value;
        }
        return true;
      }
      case "message": {
        return value.length > 0;
      }
      default: {
        return value.length > 0;
      }
    }
  }

  clearValidation(): void {
    this.isValid = false;
    this._removeErrorClass();
  }

  _addErrorClass(): void {
    this.getContent().querySelector(".input__input")?.classList.add("input__input--error");
    this.getContent().querySelector(".input__error")?.classList.add("show");
  }

  _removeErrorClass(): void {
    this.getContent().querySelector(".input__input")?.classList.remove("input__input--error");
    this.getContent().querySelector(".input__error")?.classList.remove("show");
  }
}

export { Input, InputProps };
