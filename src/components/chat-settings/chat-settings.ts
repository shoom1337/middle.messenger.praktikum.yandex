import Block from "../block";
import tmpl from "./chat-settings.tmpl";

import "./chat-settings.scss";
import { store } from "../../store";
import showHide from "../../utils/showHide";
import { ChatSettingsButton } from "../chat-settings-button/chat-settings-button";
import chatsController from "../../controllers/chatsController";

type ChatSettingsProps = {
  rootID: string;
};

class ChatSettings extends Block {
  private rootID;

  constructor(props: ChatSettingsProps) {
    const addChatUser = new ChatSettingsButton({
      variant: "add",
      text: "Добавить пользователя в чат",
      events: {
        click() {
          store.setState({
            showAddChatUserDialog: true,
          });
        },
      },
    });

    const removeChatUser = new ChatSettingsButton({
      variant: "remove",
      text: "Удалить пользователя из чата",
      events: {
        click() {
          chatsController.getChatUsers({
            chatId: store.state.currentChatId,
          });
          store.setState({
            showRemoveChatUserDialog: true,
          });
        },
      },
    });

    super(
      "div",
      {
        ...props,
        components: { addChatUser, removeChatUser },
      },
      tmpl,
    );
    this.rootID = props.rootID;
  }

  componentDidMount(): void {
    store.subscribe(({ showChatSettings }) => {
      showHide(this.rootID, showChatSettings);
    });
  }
}

export { ChatSettings };
