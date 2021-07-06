import Form from "../../../components/form";
import Input from "../../../components/input";

const avatarFormData = {
  data: {
    content: new Input({
      data: {
        label: "Аватар",
        name: "avatar",
        type: "file",
      },
      className: "input-avatar",
      variant: "row",
    }).render(),
  },
};

export default new Form(avatarFormData).content;
