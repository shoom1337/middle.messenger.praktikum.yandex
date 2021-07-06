import Form from "../../../components/form";
import Input from "../../../components/input";

const fieldsData = [
  {
    value: "pochta@yandex.ru",
    label: "Почта",
    className: "input-email",
    name: "email",
    type: "text",
  },
  {
    value: "ivanivan",
    label: "Логин",
    className: "input-login",
    name: "login",
    type: "text",
  },
  {
    value: "ivan",
    label: "Имя",
    className: "input-first-name",
    name: "first_name",
    type: "text",
  },
  {
    value: "ivanoff",
    label: "Фамилия",
    className: "input-second-name",
    name: "second_name",
    type: "text",
  },
  {
    value: "iv@n0ff",
    label: "Имя в чате",
    className: "input-display-name",
    name: "display_name",
    type: "text",
  },
  {
    value: "+7 (909) 123-56-78",
    label: "Телефон",
    className: "input-phone",
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
          className,
          variant: "row",
        }).render()
      );
    }, ""),
  },
  className: "login-form",
};

export default new Form(registerFormData).render();
