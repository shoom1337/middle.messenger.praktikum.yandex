import Page from "../../components/page";
import { Button, ButtonProps } from "../../components/button";
import { Input, InputProps } from "../../components/input";
import { Link, LinkProps } from "../../components/link";
import tmpl from "./login.tmpl";
import { INPUT_ERRORS } from "../../common/messages";

import { PageProps } from "../../common/types";
import { getFormData } from "../../utils/getFormData";

import authController from "../../controllers/authController";

class Login extends Page {
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
      href: "/register",
      text: "Нет аккаунта?",
    };
    const link = new Link(linkProps);

    const buttonProps: ButtonProps = {
      text: "Войти",
    };

    const loginButton = new Button(buttonProps);

    const fields = {
      loginInput,
      passwordInput,
    };

    const loginProps: PageProps = {
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
            const formData = getFormData(document.forms[0]);

            authController.login(formData);
          }
        },
      },
    };
    super(loginProps, tmpl);
  }
}
export default Login;
