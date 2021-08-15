import Block from "../block";
import tmpl from "./chat-list.tmpl";
import { AddButton, AddButtonProps } from "../add-button/add-button";

import { store } from "../../store";

import "./chat-list.scss";

type ChatListProps = {
  chatList: {
    name: string;
    text: string;
    unreadCount: number;
    time: string;
    isActive: boolean;
  }[];
};

class ChatList extends Block {
  constructor(props?: ChatListProps) {
    const addChatButtonProps = {
      events: {
        click() {
          store.setState({
            showAddChatDialog: true,
          });
        },
      },
    };
    const addChatButton = new AddButton(addChatButtonProps);

    super(
      "div",
      {
        ...props,
        components: {
          addChatButton,
        },
      },
      tmpl,
    );
  }

  componentDidMount(): void {
    store.subscribe(({ chatList }) => {
      this.setProps({
        chatList,
      });
      console.log(chatList);
    });
  }
}

export { ChatList, ChatListProps };
