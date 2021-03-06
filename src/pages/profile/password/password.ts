import Page from "../../../components/page";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./password.tmpl";
import { INPUT_ERRORS } from "../../../common/messages";

import { PageProps } from "../../../common/types";

import { store } from "../../../store";
import userController from "../../../controllers/userController";
import { getFormData } from "../../../utils/getFormData";
import fillUserAvatar from "../../../utils/fillUserAvatar";

class ChangePassword extends Page {
  private avatar;

  constructor() {
    const avatarProps: AvatarProps = {};
    const avatar = new Avatar(avatarProps);

    const prevPasswordInputProps: InputProps = {
      label: "Старый пароль",
      type: "password",
      name: "oldPassword",
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
      name: "newPassword",
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

    const changePasswordProps: PageProps = {
      title: "Смена пароля",
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
            const data = getFormData(document.forms[0], ["oldPassword", "newPassword"]);
            userController.updatePassword(data);
          }
        },
      },
    };
    super(changePasswordProps, tmpl);

    this.avatar = avatar;
  }

  componentDidMount(): void {
    store.subscribe((state) => {
      fillUserAvatar(state.user.avatar, this.avatar);
    });
  }
}
export default ChangePassword;
