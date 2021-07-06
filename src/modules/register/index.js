import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";

const fieldsData = [
  {
    value: "pochta@yandex.ru",
    label: "Почта",
    name: "email",
  },
  {
    value: "ivanivan",
    label: "Логин",
    name: "login",
  },
  {
    value: "ivan",
    label: "Имя",
    name: "first_name",
  },
  {
    value: "ivanoff",
    label: "Фамилия",
    name: "second_name",
  },
  {
    value: "+7 (909) 123-56-78",
    label: "Телефон",
    name: "phone",
  },
  {
    value: "123456",
    label: "Пароль",
    name: "password",
    type: "password",
  },
  {
    value: "12345",
    label: "Подтверждение",
    name: "password-confirm",
    type: "password",
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
          }).content
        );
      }, "") + new Button(buttonData).content,
  },
};

export default new Form(registerFormData).content;
