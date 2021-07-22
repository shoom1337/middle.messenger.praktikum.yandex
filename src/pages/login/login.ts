import Block from "../../components/block";
import { Button, ButtonProps } from "../../components/button";
import { Input, InputProps } from "../../components/input";
import { Link, LinkProps } from "../../components/link";
// import { FormValidation } from '../../utils/validation/form-validation';
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
};

class Login extends Block {
  constructor() {
    // const formValidation = new FormValidation();

    const loginInputProps: InputProps = {
      label: "Логин",
      name: "login",
    };
    const loginInput = new Input(loginInputProps);

    const passwordInputProps: InputProps = {
      label: "Пароль",
      type: "password",
      name: "password",
    };
    const passwordInput = new Input(passwordInputProps);
    // const passwordInput: IInput = {
    //   events: {
    //     focus: (event: Event) => {
    //       passwordValidation.clear(event);
    //     },
    //     blur: (event: Event) => {
    //       passwordValidation.check(event);
    //     }
    //   },
    //   settings: { withInternalID: true }
    // };

    const linkProps: LinkProps = {
      href: "/register.html",
      text: "Нет аккаунта?",
    };
    const link = new Link(linkProps);

    const buttonProps: ButtonProps = {
      text: "Авторизоваться",
    };

    const loginButton = new Button(buttonProps);

    const loginProps: LoginProps = {
      title: "Вход",
      components: {
        loginInput,
        passwordInput,
        loginButton,
        link,
      },
    };
    super("main", loginProps, tmpl);

    // {
    //   title: "Вход",
    //   components: {
    //     loginInput: new Input(loginInput),
    //     passwordInput: new Input(passwordInput),
    //     loginButton: new Button(loginButton)
    //   },
    //   events: {
    //     submit: (event: Event) => {
    //       const changeLocation = () => {
    //         window.location.href = "/chat/chat.html";
    //       };
    //       formValidation.check(event, changeLocation);
    //     }
    //   }
    // }
  }
}
export default Login;
