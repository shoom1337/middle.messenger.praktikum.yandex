import Block from "../../components/block";
import { Button, ButtonProps } from "../../components/button";
import { Input, InputProps } from "../../components/input";
import { Link, LinkProps } from "../../components/link";
import tmpl from "./register.tmpl";

import "../../global.scss";

type RegisterProps = {
  title: string,
  components: {
    emailInput: Input,
    loginInput: Input,
    firstNameInput: Input,
    secondNameInput: Input,
    phoneInput: Input,
    passwordInput: Input,
    passwordConfirmInput: Input,
    registerButton: Button,
    link: Link,
  },
};

class Register extends Block {
  constructor() {
    const emailInputProps: InputProps = {
      label: "Почта",
      name: "email",
    };
    const emailInput = new Input(emailInputProps);

    const loginInputProps: InputProps = {
      label: "Логин",
      name: "login",
    };
    const loginInput = new Input(loginInputProps);

    const firstNameInputProps: InputProps = {
      label: "Имя",
      name: "first_name",
    };
    const firstNameInput = new Input(firstNameInputProps);

    const secondNameInputProps: InputProps = {
      label: "Фамилия",
      name: "second_name",
    };
    const secondNameInput = new Input(secondNameInputProps);

    const phoneInputProps: InputProps = {
      label: "Телефон",
      name: "phone",
    };
    const phoneInput = new Input(phoneInputProps);

    const passwordInputProps: InputProps = {
      label: "Пароль",
      type: "password",
      name: "password",
    };
    const passwordInput = new Input(passwordInputProps);

    const passwordConfirmInputProps: InputProps = {
      label: "Подтверждение пароля",
      type: "password",
      name: "password-confirm",
    };
    const passwordConfirmInput = new Input(passwordConfirmInputProps);

    const linkProps: LinkProps = {
      href: "/login.html",
      text: "Войти",
    };
    const link = new Link(linkProps);

    const buttonProps: ButtonProps = {
      text: "Зарегистрироваться",
    };

    const registerButton = new Button(buttonProps);

    const registerProps: RegisterProps = {
      title: "Регистрация",
      components: {
        emailInput,
        loginInput,
        firstNameInput,
        secondNameInput,
        phoneInput,
        passwordInput,
        passwordConfirmInput,
        registerButton,
        link,
      },
    };
    super("main", registerProps, tmpl);
  }
}
export default Register;
