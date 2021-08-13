import Page from "../../components/page";
import tmpl from "./chat.tmpl";

import { ChatList, ChatListProps } from "../../components/chat-list";
import { ChatHeader, ChatHeaderProps } from "../../components/chat-header";
import { ChatMessages, ChatMessagesProps } from "../../components/chat-messages";
import { MessageForm, MessageFormProps } from "../../components/message-form";

import { Button } from "../../components/button";

import "../../global.scss";
import "./chat.scss";
import { Input, InputProps } from "../../components/input";

import { PageProps } from "../../common/types";

import authController from "../../controllers/authController";

import chatsAPI from "../../api/chatsAPI";

class Chat extends Page {
  constructor() {
    const chatListProps: ChatListProps = {
      chatList: [
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
      messageList: [
        {
          text: "<a href='/login'>Страница логина</a><br><a href='/register'>Страница регистрации</a>",
          style: "incoming",
        },
        {
          text: "Профиль:<br><a href='/edit'>Редактирование</a><br><a href='/password'>Смена пароля</a><br><a href='/avatar'>Смена аватара</a>",
          style: "outgoing",
        },
        { text: "Есть над чем задуматься: зима близко", style: "incoming" },
        {
          text: "Повседневная практика показывает, что базовый вектор развития, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для укрепления моральных ценностей. Являясь всего лишь частью общей картины, активно развивающиеся страны третьего мира представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть объявлены нарушающими общечеловеческие нормы этики и морали.",
          style: "outgoing",
        },
        {
          text: "Прототип нового сервиса - это как старческий скрип Амстердама",
          style: "incoming",
        },
        { text: "Очевидцы сообщают, что слышали песнь светлого будущего", style: "outgoing" },
        {
          text: "Но действия представителей оппозиции функционально разнесены на независимые элементы. В целом, конечно, высокотехнологичная концепция общественного уклада играет определяющее значение для системы обучения кадров, соответствующей насущным потребностям.",
          style: "incoming",
        },
      ],
    };
    const chatMessages = new ChatMessages(chatMessagesProps);

    const logoutButton = new Button({
      text: "выйти",
      events: {
        click: () => {
          authController.logout();
        },
      },
    });

    const chatHeaderProps: ChatHeaderProps = {
      correspondent: {
        name: "Вадим",
        lastVisit: "100 лет назад",
      },
    };
    const chatHeader = new ChatHeader(chatHeaderProps);

    const messageFormInputProps: InputProps = {
      label: "Сообщение",
      name: "message",
      error: "Введите сообщение",
      variant: "message",
      events: {
        focus() {
          if (!this.isValid) {
            this.clearValidation();
          }
        },
        blur() {
          this.validate();
        },
      },
    };
    const messageFormInput = new Input(messageFormInputProps);

    const messageFormProps: MessageFormProps = {
      components: { messageFormInput },
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          let isFormValid = true;

          messageFormInput.validate();
          if (!messageFormInput.isValid) {
            isFormValid = false;
          }
          if (isFormValid) {
            const form: { [key: string]: string } = {
              message: messageFormInput.getValue(),
            };
            console.log(form);
          }
        },
      },
    };
    const messageForm = new MessageForm(messageFormProps);

    const chatProps: PageProps = {
      components: {
        chatList,
        chatHeader,
        chatMessages,
        messageForm,
        logoutButton,
      },
      title: "Чат",
    };
    super(chatProps, tmpl);

    // chatsAPI.createChat({ title: "chat888" }).then((r) => console.log(r));
    chatsAPI.getChats().then((r) => console.log(r));
  }
}

export default Chat;
