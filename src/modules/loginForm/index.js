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
};

const passwordInputData = {
  data: {
    value: "123456",
    label: "Пароль",
    type: "password",
    name: "password",
  },
};

const buttonData = {
  data: {
    text: "Авторизоваться",
  },
};

const loginFormData = {
  data: {
    content:
      new Input(loginInputData).content +
      new Input(passwordInputData).content +
      new Button(buttonData).content,
  },
};

export default new Form(loginFormData).content;
