import Block from "../block";
import tmpl from "./user-settings.tmpl";
import { ObjectLiteral } from "../../common/types";

import { Avatar, AvatarProps } from "../avatar";
import { Button, ButtonProps } from "../button";
import { BurgerButton, BurgerButtonProps } from "../burger-button";

import authController from "../../controllers/authController";
import "./user-settings.scss";

import { store } from "../../store";
import fillUserAvatar from "../../utils/fillUserAvatar";
import showHide from "../../utils/showHide";

type UserSettingsProps = {
  title: string;
  user: ObjectLiteral;
  rootID: string;
};

class UserSettings extends Block {
  private avatar: Block;
  private rootID: string;

  constructor(props: UserSettingsProps) {
    const avatarProps: AvatarProps = {};
    const settingsAvatar = new Avatar(avatarProps);

    const logoutButtonProps: ButtonProps = {
      text: "Выйти",
      events: {
        click: () => {
          authController.logout();
        },
      },
    };
    const logoutButton = new Button(logoutButtonProps);

    const burgerButtonProps: BurgerButtonProps = {
      events: {
        click() {
          store.setState({ showSettings: false });
        },
      },
    };
    const closeButton = new BurgerButton(burgerButtonProps);

    super(
      "div",
      {
        ...props,
        components: {
          closeButton,
          settingsAvatar,
          logoutButton,
        },
      },
      tmpl,
    );

    this.avatar = settingsAvatar;
    this.rootID = props.rootID;
  }
  componentDidMount(): void {
    store.subscribe(({ user, showSettings }) => {
      this.setProps({
        user,
      });
      fillUserAvatar(user.avatar, this.avatar);
      showHide(this.rootID, showSettings);
    });
  }
}

export { UserSettings, UserSettingsProps };
