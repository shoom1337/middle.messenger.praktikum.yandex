import Block from "../block";
import tmpl from "./chat-list.tmpl";
import { AddButton, AddButtonProps } from "../add-button/add-button";

import { store } from "../../store";

import "./chat-list.scss";

function chatSelected() {
  const list = document.querySelectorAll(".chat-list__item");
  for (const item of list) {
    const chatId = (item as HTMLElement).dataset.chatId;
    item.classList.remove("chat-list__item_active");

    item.addEventListener("click", () => {
      store.setState({
        currentChatId: chatId,
      });
    });

    if (chatId === store.state.currentChatId) {
      item.classList.add("chat-list__item_active");
    }
  }
}

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
    const addChatButtonProps: AddButtonProps = {
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
      chatSelected();
    });
  }
}

export { ChatList, ChatListProps };
