import Form from "../../../components/form";
import Input from "../../../components/input-row-variant";

const fieldsData = [
  {
    value: "pochta@yandex.ru",
    label: "Почта",
    name: "email",
    type: "text",
  },
  {
    value: "ivanivan",
    label: "Логин",
    name: "login",
    type: "text",
  },
  {
    value: "ivan",
    label: "Имя",
    name: "first_name",
    type: "text",
  },
  {
    value: "ivanoff",
    label: "Фамилия",
    name: "second_name",
    type: "text",
  },
  {
    value: "iv@n0ff",
    label: "Имя в чате",
    name: "display_name",
    type: "text",
  },
  {
    value: "+7 (909) 123-56-78",
    label: "Телефон",
    name: "phone",
    type: "text",
  },
];

const registerFormData = {
  data: {
    content: fieldsData.reduce((acc, item) => {
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
        }).content
      );
    }, ""),
  },
  className: "login-form",
};

export default new Form(registerFormData).content;
