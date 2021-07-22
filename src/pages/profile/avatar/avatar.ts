import Block from "../../../components/block";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./avatar.tmpl";

import "../../../global.scss";

type changeAvatarProps = {
  components: {
    avatar: Avatar,
    avatarInput: Input,
    button: Button,
    panelLink: PanelLink,
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

    const changePasswordProps: changeAvatarProps = {
      components: {
        avatar,
        avatarInput,
        button,
        panelLink,
      },
    };
    super("main", changePasswordProps, tmpl);
  }
}
export default ChangeAvatar;
