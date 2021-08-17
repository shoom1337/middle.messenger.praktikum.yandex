import Page from "../../../components/page";
import { Button, ButtonProps } from "../../../components/button";
import { Input, InputProps } from "../../../components/input";
import { Avatar, AvatarProps } from "../../../components/avatar";
import { PanelLink, PanelLinkProps } from "../../../components/panel-link";
import tmpl from "./edit.tmpl";
import { INPUT_ERRORS } from "../../../common/messages";

import { PageProps } from "../../../common/types";

import { store } from "../../../store";
import keysToCamelCase from "../../../utils/keysToCamelCase";
import fillFields from "../../../utils/fillFields";
import fillUserAvatar from "../../../utils/fillUserAvatar";

import userController from "../../../controllers/userController";
import { getFormData } from "../../../utils/getFormData";

class EditProfile extends Page {
  private fields;
  private avatar;

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

    const editProps: PageProps = {
      title: "Редактирование профиля",
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
            const data = getFormData(document.forms[0]);

            userController.updateProfile(data);
          }
        },
      },
    };

    super(editProps, tmpl);

    this.fields = fields;

    this.avatar = avatar;
  }

  componentDidMount(): void {
    store.subscribe((state) => {
      fillFields(keysToCamelCase(state.user), this.fields);
      fillUserAvatar(state.user.avatar, this.avatar);
      // this.props.ChooseAvatar.props.src = state.currentUser?.avatar
      //   ? env.HOST_RESOURCES + state.currentUser?.avatar
      //   : defaultAvatar;
    });
  }
}
export default EditProfile;
