import Block from "../block";
import tmpl from "./chat-messages.tmpl";
import { store } from "../../store";

import "./chat-messages.scss";
import messagesController from "../../controllers/messagesController";
import parseMessageList from "../../utils/parseMessageList";

class ChatMessages extends Block {
  private chatId: number | null;
  constructor() {
    super("div", { messages: [] }, tmpl);
    this.chatId = null;
  }

  componentDidMount(): void {
    store.subscribe(({ currentChatId, messages, user }) => {
      this.setProps({ messages: parseMessageList(messages, user) });
      if (currentChatId !== this.chatId) {
        this.chatId = currentChatId;
        messagesController.close();
        messagesController.connect();
      }
      const list = document.getElementById("chat-messages");

      if (list?.scrollHeight) {
        document.getElementById("chatMessages").scrollTo(0, list.scrollHeight);
      }
    });
  }
}

export { ChatMessages };
