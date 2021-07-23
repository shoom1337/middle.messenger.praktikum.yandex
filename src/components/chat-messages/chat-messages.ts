import Block from "../block";
import tmpl from "./chat-messages.tmpl";

import "./chat-messages.scss";

type ChatMessagesProps = {
  messages: {
    text: string,
  }[],
};

class ChatMessages extends Block {
  constructor(props: ChatMessagesProps) {
    super("div", props, tmpl);
  }
}

export { ChatMessages, ChatMessagesProps };
