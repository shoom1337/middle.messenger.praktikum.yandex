import Block from "../../../components/block";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./avatar.tmpl";

import { INPUT_ERRORS } from "../../../common/messages";

import "../../../global.scss";

type changeAvatarProps = {
  components: {
    avatar: Avatar,
    avatarInput: Input,
    button: Button,
    panelLink: PanelLink,
  },
  events?: {
    [key: string]: (event: Event) => void,
  },
};

class ChangeAvatar extends Block {
  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const avatarInputProps: InputProps = {
      label: "Аватар",
      name: "avatar",
      variant: "row",
      type: "file",
      error: INPUT_ERRORS.AVATAR,
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
    const avatarInput = new Input(avatarInputProps);

    const buttonProps: ButtonProps = {
      text: "Сохранить",
    };
    const button = new Button(buttonProps);

    const panelLinkProps: PanelLinkProps = {
      href: "/",
    };
    const panelLink = new PanelLink(panelLinkProps);

    const changeAvatarProps: changeAvatarProps = {
      components: {
        avatar,
        avatarInput,
        button,
        panelLink,
      },
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          let isFormValid = true;

          avatarInput.validate();
          if (!avatarInput.isValid) {
            isFormValid = false;
          }
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
    super("main", changeAvatarProps, tmpl);
  }
}
export default ChangeAvatar;
