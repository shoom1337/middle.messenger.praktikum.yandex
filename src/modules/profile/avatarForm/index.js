import Form from "../../../components/form";
import Input from "../../../components/input-row-variant";

const avatarFormData = {
  data: {
    content: new Input({
      data: {
        label: "Аватар",
        name: "avatar",
        type: "file",
      },
    }).content,
  },
};

export default new Form(avatarFormData).content;
