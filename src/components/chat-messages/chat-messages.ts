import Block from "../block";
import tmpl from "./chat-messages.tmpl";

import "./chat-messages.scss";

type ChatMessagesProps = {
  messageList: {
    text: string;
    style: "incoming" | "outgoing";
  }[];
};

class ChatMessages extends Block {
  constructor(props: ChatMessagesProps) {
    super("div", props, tmpl);
  }
}

export { ChatMessages, ChatMessagesProps };
