import Block from "../../components/block";
import tmpl from "./chat.tmpl";

import { ChatList, ChatListProps } from "../../components/chat-list";
import { ChatHeader, ChatHeaderProps } from "../../components/chat-header";
import { ChatMessages, ChatMessagesProps } from "../../components/chat-messages";

import Fetch from "../../utils/fetch";

import "../../global.scss";
import "./chat.scss";

type ChatProps = {
  components: {
    chatList: ChatList,
    chatHeader: ChatHeader,
    chatMessages: ChatMessages,
  },
};

class Chat extends Block {
  constructor() {
    const fetch = new Fetch();
    const url = "https://jsonplaceholder.typicode.com";
    fetch
      .get(url + "/comments", {
        data: {
          postId: 5,
        },
        timeout: 10000,
        headers: {
          "Content-Type": "json",
        },
      })
      .then((r) => console.log(r));

    const chatListProps: ChatListProps = {
      list: [
        {
          name: "Андрей",
          text: "Изображение",
          unreadCount: 2,
          time: "10:49",
          isActive: true,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Андрей",
          text: "Изображение",
          unreadCount: 2,
          time: "10:49",
          isActive: true,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Андрей",
          text: "Изображение",
          unreadCount: 2,
          time: "10:49",
          isActive: true,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Андрей",
          text: "Изображение",
          unreadCount: 2,
          time: "10:49",
          isActive: true,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Киноклуб",
          text: "стикер",
          unreadCount: 1,
          time: "11:12",
          isActive: false,
        },
        {
          name: "Андрей",
          text: "Изображение",
          unreadCount: 2,
          time: "10:49",
          isActive: true,
        },
      ],
    };
    const chatList = new ChatList(chatListProps);

    const chatMessagesProps: ChatMessagesProps = {
      messages: [
        { text: "123" },
        { text: "234" },
        { text: "123" },
        { text: "234" },
        { text: "123" },
        { text: "234" },
        { text: "123" },
        { text: "234" },
        { text: "123" },
        { text: "234" },
      ],
    };
    const chatMessages = new ChatMessages(chatMessagesProps);

    const chatHeaderProps: ChatHeaderProps = {
      correspondent: {
        name: "Вадим",
        lastVisit: "100 лет назад",
      },
    };
    const chatHeader = new ChatHeader(chatHeaderProps);

    const chatProps: ChatProps = {
      components: {
        chatList,
        chatHeader,
        chatMessages,
      },
    };
    super("main", chatProps, tmpl);
  }
}

export default Chat;
