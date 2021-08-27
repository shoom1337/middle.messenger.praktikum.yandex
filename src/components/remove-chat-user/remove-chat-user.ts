import Block from "../block";
import tmpl from "./remove-chat-user.tmpl";
import { Button, ButtonProps } from "../button";
import { CloseButton, CloseButtonProps } from "../close-button";
import { store } from "../../store";
import "./remove-chat-user.scss";

import chatsController from "../../controllers/chatsController";

import showHide from "../../utils/showHide";
import { ObjectLiteral } from "../../common/types";

type RemoveChatUserProps = {
  title: string;
  rootID: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class RemoveChatUser extends Block {
  private rootID: string;

  constructor(props: RemoveChatUserProps) {
    const closeRemoveChatUserButtonProps: CloseButtonProps = {
      events: {
        click() {
          store.setState({
            showRemoveChatUserDialog: false,
            chatUsers: [],
          });
        },
      },
    };

    const closeRemoveChatUserButton = new CloseButton(closeRemoveChatUserButtonProps);

    const removeChatUserButtonProps: ButtonProps = {
      text: "Удалить",
      events: {
        click() {
          const data = new FormData(
            document.getElementById("remove-chat-user-form") as HTMLFormElement,
          );
          const ids = [];
          for (const item of data) {
            ids.push(item[1]);
          }
          chatsController.removeChatUsers({
            users: ids,
            chatId: store.state.currentChatId,
          });
        },
      },
    };
    const removeChatUserButton = new Button(removeChatUserButtonProps);

    super(
      "modal",
      {
        ...props,
        components: {
          closeRemoveChatUserButton,
          removeChatUserButton,
        },
      },
      tmpl,
    );
    this.rootID = props.rootID;
    this.setProps({ users: [] });
  }

  componentDidMount(): void {
    store.subscribe(({ showRemoveChatUserDialog, chatUsers, user }) => {
      showHide(this.rootID, showRemoveChatUserDialog);
      this.setProps({
        users: chatUsers.filter((i: ObjectLiteral) => i.id !== user.id),
      });
    });
  }
}

export { RemoveChatUser, RemoveChatUserProps };
