import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";

const fieldsData = [
  {
    value: "pochta@yandex.ru",
    label: "Почта",
    className: "input-email",
    name: "email",
  },
  {
    value: "ivanivan",
    label: "Логин",
    className: "input-login",
    name: "login",
  },
  {
    value: "ivan",
    label: "Имя",
    className: "input-first-name",
    name: "first_name",
  },
  {
    value: "ivanoff",
    label: "Фамилия",
    className: "input-last-name",
    name: "second_name",
  },
  {
    value: "+7 (909) 123-56-78",
    label: "Телефон",
    className: "input-phone",
    name: "phone",
  },
  {
    value: "123456",
    label: "Пароль",
    className: "input-password",
    name: "password",
    type: "password",
    error: {
      message: "Пароли не совпадают",
    },
  },
  {
    value: "12345",
    label: "Подтверждение",
    className: "input-password-confirm",
    name: "password-confirm",
    type: "password",
    error: {
      message: "Пароли не совпадают",
    },
  },
];

const buttonData = {
  data: {
    text: "Зарегистрироваться",
  },
};

const registerFormData = {
  data: {
    content:
      fieldsData.reduce((acc, item) => {
        let { value, label, name, className, error, type } = item;
        return (
          acc +
          new Input({
            data: {
              value,
              label,
              name,
              type,
              error,
            },
            className,
          }).render()
        );
      }, "") + new Button(buttonData).content,
  },
  className: "register-form",
};

export default new Form(registerFormData).render();
