import Block from "../block";
import tmpl from "./chat-list.tmpl";

import "./chat-list.scss";

type ChatListProps = {
  list: {
    name: string,
    text: string,
    unreadCount: number,
    time: string,
    isActive: boolean,
  }[],
};

class ChatList extends Block {
  constructor(props: ChatListProps) {
    super("div", props, tmpl);
  }
}

export { ChatList, ChatListProps };
