import Block from "../../../components/block";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./edit.tmpl";

import "../../../global.scss";

type EditProps = {
  components: {
    avatar: Avatar,
    emailInput: Input,
    loginInput: Input,
    firstNameInput: Input,
    secondNameInput: Input,
    displayNameInput: Input,
    phoneInput: Input,
    button: Button,
    panelLink: PanelLink,
  },
};

class EditProfile extends Block {
  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const emailInputProps: InputProps = {
      label: "Почта",
      name: "email",
      variant: "row",
    };
    const emailInput = new Input(emailInputProps);

    const loginInputProps: InputProps = {
      label: "Логин",
      name: "login",
      variant: "row",
    };
    const loginInput = new Input(loginInputProps);

    const firstNameInputProps: InputProps = {
      label: "Имя",
      name: "first_name",
      variant: "row",
    };
    const firstNameInput = new Input(firstNameInputProps);

    const secondNameInputProps: InputProps = {
      label: "Фамилия",
      name: "second_name",
      variant: "row",
    };
    const secondNameInput = new Input(secondNameInputProps);

    const displayNameInputProps: InputProps = {
      label: "Имя в чате",
      name: "display_name",
      variant: "row",
    };
    const displayNameInput = new Input(displayNameInputProps);

    const phoneInputProps: InputProps = {
      label: "Телефон",
      name: "phone",
      variant: "row",
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

    const changePasswordProps: EditProps = {
      components: {
        avatar,
        emailInput,
        loginInput,
        firstNameInput,
        secondNameInput,
        phoneInput,
        displayNameInput,
        button,
        panelLink,
      },
    };
    super("main", changePasswordProps, tmpl);
  }
}
export default EditProfile;
