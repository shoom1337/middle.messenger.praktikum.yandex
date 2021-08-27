import Page from "../../../components/page";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./avatar.tmpl";

import { INPUT_ERRORS } from "../../../common/messages";

import { PageProps } from "../../../common/types";

import { store } from "../../../store";
import userController from "../../../controllers/userController";

import fillUserAvatar from "../../../utils/fillUserAvatar";

class ChangeAvatar extends Page {
  private avatar;

  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const avatarInputProps: InputProps = {
      label: "Аватар",
      name: "file",
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

    const changeAvatarProps: PageProps = {
      title: "Смена аватара",
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
            const formData = new FormData();
            formData.append("avatar", avatarInput.element.querySelector("input").files[0]);

            userController.updateAvatar(formData);
          }
        },
      },
    };
    super(changeAvatarProps, tmpl);

    this.avatar = avatar;
  }

  componentDidMount(): void {
    store.subscribe((state) => {
      fillUserAvatar(state.user.avatar, this.avatar);
    });
  }
}
export default ChangeAvatar;
