import Block from "../block";
import tmpl from "./chat-header.tmpl";

import "./chat-header.scss";

type ChatHeaderProps = {
  correspondent: {
    name: string;
    lastVisit: string;
  };
};

class ChatHeader extends Block {
  constructor(props: ChatHeaderProps) {
    super("header", props, tmpl);
  }
}

export { ChatHeader, ChatHeaderProps };
