import Block from "../../components/block";
import { Button, ButtonProps } from "../../components/button";
import { Input, InputProps } from "../../components/input";
import { Link, LinkProps } from "../../components/link";
import { INPUT_ERRORS } from "../../common/messages";
import tmpl from "./login.tmpl";

import "../../global.scss";

type LoginProps = {
  title: string,
  components: {
    loginInput: Input,
    passwordInput: Input,
    loginButton: Button,
    link: Link,
  },
  events?: {
    [key: string]: (event: Event) => void,
  },
};

class Login extends Block {
  constructor() {
    const loginInputProps: InputProps = {
      label: "Логин",
      name: "login",
      error: INPUT_ERRORS.LOGIN,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const loginInput = new Input(loginInputProps);

    const passwordInputProps: InputProps = {
      label: "Пароль",
      type: "password",
      name: "password",
      error: INPUT_ERRORS.PASSWORD,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const passwordInput = new Input(passwordInputProps);

    const linkProps: LinkProps = {
      href: "/register.html",
      text: "Нет аккаунта?",
    };
    const link = new Link(linkProps);

    const buttonProps: ButtonProps = {
      text: "Авторизоваться",
    };

    const loginButton = new Button(buttonProps);

    const fields = { loginInput, passwordInput };

    const loginProps: LoginProps = {
      title: "Вход",
      components: {
        ...fields,
        loginButton,
        link,
      },
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          let isFormValid = true;

          Object.values(fields).forEach((field) => {
            field.validate();
            if (!field.isValid) {
              isFormValid = false;
            }
          });

          if (isFormValid) {
            const form: { [key: string]: string } = {};
            const inputs = document.querySelectorAll("input");
            Array.from(inputs).forEach((input) => {
              form[input.name] = input.value;
            });
            console.log(form);
          }
        },
      },
    };
    super("main", loginProps, tmpl);
  }
}
export default Login;
