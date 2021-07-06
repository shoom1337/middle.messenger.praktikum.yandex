import Form from "../../../components/form";
import Input from "../../../components/input-row-variant";

const fieldsData = [
  {
    value: "123456",
    label: "Старый пароль",
    name: "oldPassword",
    type: "password",
  },
  {
    value: "12345678",
    label: "Новый пароль",
    name: "newPassword",
    type: "password",
  },
  {
    value: "12345678",
    label: "Подтверждение",
    name: "password-confirm",
    type: "password",
  },
];

const registerFormData = {
  data: {
    content: fieldsData.reduce((acc, item) => {
      return (
        acc +
        new Input({
          data: item,
        }).content
      );
    }, ""),
  },
};

export default new Form(registerFormData).content;
