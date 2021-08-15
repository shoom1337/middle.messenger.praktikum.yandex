import Block from "../block";
import tmpl from "./add-chat-user.tmpl";
import { Input, InputProps } from "../input";
import { Button, ButtonProps } from "../button";
import { CloseButton, CloseButtonProps } from "../close-button";
import { store } from "../../store";
import "./add-chat-user.scss";

import chatsController from "../../controllers/chatsController";

import showHide from "../../utils/showHide";
import userController from "../../controllers/userController";

type AddChatUserProps = {
  title: string;
  rootID: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class AddChatUser extends Block {
  private rootID: string;

  constructor(props?: AddChatUserProps) {
    const addChatUserInputProps: InputProps = {
      label: "Логин пользователя",
      variant: "default",
      name: "login",
    };
    const addChatUserInput = new Input(addChatUserInputProps);

    const searchUsersButtonProps: ButtonProps = {
      text: "Найти",
      events: {
        click() {
          userController.searchUsers({
            login: addChatUserInput.getValue(),
          });
        },
      },
    };
    const searchUsersButton = new Button(searchUsersButtonProps);

    const addChatUserButtonProps: ButtonProps = {
      text: "Добавить",
      events: {
        click() {
          const data = new FormData(
            document.getElementById("add-chat-user-form") as HTMLFormElement,
          );
          const ids = [];
          for (const item of data) {
            ids.push(item[1]);
          }
          chatsController.addChatUsers({
            users: ids,
            chatId: 355,
          });
        },
      },
    };
    const addChatUserButton = new Button(addChatUserButtonProps);

    const closeAddChatUserButtonProps: CloseButtonProps = {
      events: {
        click() {
          addChatUserInput.setProps({
            value: "",
          });
          store.setState({
            showAddChatUserDialog: false,
            findedUsers: [],
          });
        },
      },
    };
    const closeAddChatUserButton = new CloseButton(closeAddChatUserButtonProps);

    super(
      "modal",
      {
        ...props,
        components: {
          addChatUserInput,
          searchUsersButton,
          addChatUserButton,
          closeAddChatUserButton,
        },
      },
      tmpl,
    );
    this.rootID = props.rootID;
    this.setProps({ users: [] });
  }

  componentDidMount(): void {
    store.subscribe(({ showAddChatUserDialog, findedUsers }) => {
      showHide(this.rootID, showAddChatUserDialog);
      this.setProps({
        users: findedUsers,
      });
    });
  }
}

export { AddChatUser, AddChatUserProps };
