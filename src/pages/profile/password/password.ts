import Block from "../../../components/block";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./password.tmpl";
import { INPUT_ERRORS } from "../../../common/messages";

import "../../../global.scss";

type ChangePasswordProps = {
  components: {
    avatar: Avatar,
    prevPasswordInput: Input,
    newPasswordInput: Input,
    newPasswordConfirmInput: Input,
    button: Button,
    panelLink: PanelLink,
  },
  events?: {
    [key: string]: (event: Event) => void,
  },
};

class ChangePassword extends Block {
  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const prevPasswordInputProps: InputProps = {
      label: "Старый пароль",
      type: "password",
      name: "prev-password",
      variant: "row",
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
    const prevPasswordInput = new Input(prevPasswordInputProps);

    const newPasswordInputProps: InputProps = {
      label: "Новый пароль",
      type: "password",
      name: "password",
      variant: "row",
      error: INPUT_ERRORS.PASSWORD,
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
    const newPasswordInput = new Input(newPasswordInputProps);

    const newPasswordConfirmInputProps: InputProps = {
      label: "Новый пароль",
      type: "password",
      name: "password-confirm",
      variant: "row",
      error: INPUT_ERRORS.PASSWORD_CONFIRM,
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
    const newPasswordConfirmInput = new Input(newPasswordConfirmInputProps);

    const buttonProps: ButtonProps = {
      text: "Сохранить",
    };
    const button = new Button(buttonProps);

    const panelLinkProps: PanelLinkProps = {
      href: "/",
    };
    const panelLink = new PanelLink(panelLinkProps);

    const fields = {
      prevPasswordInput,
      newPasswordInput,
      newPasswordConfirmInput,
    };

    const changePasswordProps: ChangePasswordProps = {
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
    super("main", changePasswordProps, tmpl);
  }
}
export default ChangePassword;
