import Block from "../../../components/block";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./password.tmpl";

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
};

class ChangePassword extends Block {
  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const prevPasswordInputProps: InputProps = {
      label: "Старый пароль",
      type: "password",
      name: "password",
      variant: "row",
    };
    const prevPasswordInput = new Input(prevPasswordInputProps);

    const newPasswordInputProps: InputProps = {
      label: "Новый пароль",
      type: "password",
      name: "password",
      variant: "row",
    };
    const newPasswordInput = new Input(newPasswordInputProps);

    const newPasswordConfirmInputProps: InputProps = {
      label: "Новый пароль",
      type: "password",
      name: "password",
      variant: "row",
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

    const changePasswordProps: ChangePasswordProps = {
      components: {
        avatar,
        prevPasswordInput,
        newPasswordInput,
        newPasswordConfirmInput,
        button,
        panelLink,
      },
    };
    super("main", changePasswordProps, tmpl);
  }
}
export default ChangePassword;
