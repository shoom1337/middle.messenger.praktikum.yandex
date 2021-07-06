import Form from "../../../components/form";
import Input from "../../../components/input";

const fieldsData = [
  {
    value: "123456",
    label: "Старый пароль",
    className: "input-old-password",
    name: "oldPassword",
    type: "password",
  },
  {
    value: "12345678",
    label: "Новый пароль",
    className: "input-new-password",
    name: "newPassword",
    type: "password",
  },
  {
    value: "12345678",
    label: "Подтверждение",
    className: "input-password-confirm",
    name: "password-confirm",
    type: "password",
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
};

export default new Form(registerFormData).content;
