import Page from "../../components/page";
import { Button, ButtonProps } from "../../components/button";
import { Input, InputProps } from "../../components/input";
import { Link, LinkProps } from "../../components/link";
import tmpl from "./register.tmpl";
import { INPUT_ERRORS } from "../../common/messages";

import { PageProps } from "../../common/types";
import { getFormData } from "../../utils/getFormData";

import authController from "../../controllers/authController";

class Register extends Page {
  constructor() {
    const emailInputProps: InputProps = {
      label: "Почта",
      name: "email",
      error: INPUT_ERRORS.EMAIL,
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
    const emailInput = new Input(emailInputProps);

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

    const firstNameInputProps: InputProps = {
      label: "Имя",
      name: "first_name",
      error: INPUT_ERRORS.NAME,
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
    const firstNameInput = new Input(firstNameInputProps);

    const secondNameInputProps: InputProps = {
      label: "Фамилия",
      name: "second_name",
      error: INPUT_ERRORS.NAME,
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
    const secondNameInput = new Input(secondNameInputProps);

    const phoneInputProps: InputProps = {
      label: "Телефон",
      name: "phone",
      error: INPUT_ERRORS.PHONE,
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
    const phoneInput = new Input(phoneInputProps);

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

    const passwordConfirmInputProps: InputProps = {
      label: "Подтверждение пароля",
      type: "password",
      name: "password-confirm",
      error: INPUT_ERRORS.PASSWORD_CONFIRM,
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
    const passwordConfirmInput = new Input(passwordConfirmInputProps);

    const linkProps: LinkProps = {
      href: "/login",
      text: "Войти",
    };
    const link = new Link(linkProps);

    const buttonProps: ButtonProps = {
      text: "Зарегистрироваться",
    };

    const registerButton = new Button(buttonProps);

    const fields = {
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      phoneInput,
      passwordInput,
      passwordConfirmInput,
    };

    const registerProps: PageProps = {
      title: "Регистрация",
      components: {
        ...fields,
        registerButton,
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

            authController.register(formData);
          }
        },
      },
    };
    super(registerProps, tmpl);
  }
}
export default Register;
