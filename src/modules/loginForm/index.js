import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";

const loginInputData = {
  data: {
    value: "Login",
    label: "Логин",
    type: "text",
    name: "login",
  },
  className: "input-login",
};

const passwordInputData = {
  data: {
    value: "123456",
    label: "Пароль",
    type: "password",
    name: "password",
  },
  className: "input-password",
};

const buttonData = {
  data: {
    text: "Авторизоваться",
  },
};

const loginFormData = {
  data: {
    content:
      new Input(loginInputData).render() +
      new Input(passwordInputData).render() +
      new Button(buttonData).content,
  },
  className: "login-form",
};

export default new Form(loginFormData).render();
