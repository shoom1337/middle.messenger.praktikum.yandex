import Block from "../../../components/block";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./edit.tmpl";
import { INPUT_ERRORS } from "../../../common/messages";

import "../../../global.scss";

type EditProps = {
  components: {
    avatar: Avatar;
    emailInput: Input;
    loginInput: Input;
    firstNameInput: Input;
    secondNameInput: Input;
    displayNameInput: Input;
    phoneInput: Input;
    button: Button;
    panelLink: PanelLink;
  };
  events?: {
    [key: string]: (event: Event) => void;
  };
};

class EditProfile extends Block {
  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const emailInputProps: InputProps = {
      label: "Почта",
      name: "email",
      variant: "row",
      error: INPUT_ERRORS.EMAIL,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const emailInput = new Input(emailInputProps);

    const loginInputProps: InputProps = {
      label: "Логин",
      name: "login",
      variant: "row",
      error: INPUT_ERRORS.LOGIN,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const loginInput = new Input(loginInputProps);

    const firstNameInputProps: InputProps = {
      label: "Имя",
      name: "first_name",
      variant: "row",
      error: INPUT_ERRORS.NAME,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const firstNameInput = new Input(firstNameInputProps);

    const secondNameInputProps: InputProps = {
      label: "Фамилия",
      name: "second_name",
      variant: "row",
      error: INPUT_ERRORS.NAME,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const secondNameInput = new Input(secondNameInputProps);

    const displayNameInputProps: InputProps = {
      label: "Имя в чате",
      name: "display_name",
      variant: "row",
      error: INPUT_ERRORS.NAME,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const displayNameInput = new Input(displayNameInputProps);

    const phoneInputProps: InputProps = {
      label: "Телефон",
      name: "phone",
      variant: "row",
      error: INPUT_ERRORS.PHONE,
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const phoneInput = new Input(phoneInputProps);

    const buttonProps: ButtonProps = {
      text: "Сохранить",
    };
    const button = new Button(buttonProps);

    const panelLinkProps: PanelLinkProps = {
      href: "/",
    };
    const panelLink = new PanelLink(panelLinkProps);

    const fields = {
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      phoneInput,
      displayNameInput,
    };

    const editProps: EditProps = {
      components: {
        ...fields,
        avatar,
        button,
        panelLink,
      },
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          let isFormValid = true;

          Object.values(fields).forEach((field) => {
            field.validate();
            if (!field.isValid) {
              isFormValid = false;
            }
          });

          if (isFormValid) {
            const form: { [key: string]: string } = {};
            const inputs = document.querySelectorAll("input");
            Array.from(inputs).forEach((input) => {
              form[input.name] = input.value;
            });
            console.log(form);
          }
        },
      },
    };
    super("main", editProps, tmpl);
  }
}
export default EditProfile;
