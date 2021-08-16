import Page from "../../components/page";
import tmpl from "./chat.tmpl";

import { ChatList } from "../../components/chat-list";
import { ChatHeader, ChatHeaderProps } from "../../components/chat-header";
import { ChatMessages } from "../../components/chat-messages";
import { MessageForm, MessageFormProps } from "../../components/message-form";
import { UserSettings, UserSettingsProps } from "../../components/user-settings/user-settings";
import { BurgerButton, BurgerButtonProps } from "../../components/burger-button/burger-button";
import { AddChat } from "../../components/add-chat/add-chat";

import "../../global.scss";
import "./chat.scss";
import { Input, InputProps } from "../../components/input";

import { PageProps } from "../../common/types";

import chatsController from "../../controllers/chatsController";
import { store } from "../../store";
import { ChatSettings } from "../../components/chat-settings/chat-settings";
import { AddChatUser } from "../../components/add-chat-user/add-chat-user";
import { RemoveChatUser } from "../../components/remove-chat-user/remove-chat-user";
import messagesController from "../../controllers/messagesController";
import sanitize from "../../utils/sanitize";

class Chat extends Page {
  constructor() {
    const burgerButtonProps: BurgerButtonProps = {
      events: {
        click() {
          store.setState({ showSettings: true });
        },
      },
    };
    const openButton = new BurgerButton(burgerButtonProps);

    const userSettingsProps: UserSettingsProps = {
      title: "Профиль",
      user: {
        name: "Иван",
        email: "email@domain.com",
      },
      rootID: "userSettings",
    };
    const userSettings = new UserSettings(userSettingsProps);

    const addChatDialog = new AddChat({
      title: "Добавить чат",
      rootID: "addChatDialog",
    });

    const chatList = new ChatList();

    const chatMessages = new ChatMessages();

    const chatHeaderProps: ChatHeaderProps = {
      correspondent: {
        name: "Вадим",
        lastVisit: "100 лет назад",
      },
    };
    const chatHeader = new ChatHeader(chatHeaderProps);

    const chatSettings = new ChatSettings({
      rootID: "chatSettings",
    });

    const addChatUserDialog = new AddChatUser({
      title: "Добавить пользователя",
      rootID: "addChatUserDialog",
    });

    const removeChatUserDialog = new RemoveChatUser({
      title: "Удалить пользователя",
      rootID: "removeChatUserDialog",
    });

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

    function send(e: Event) {
      e.preventDefault();

      let isFormValid = true;

      messageFormInput.validate();
      if (!messageFormInput.isValid) {
        isFormValid = false;
      }
      if (isFormValid) {
        messagesController.send(sanitize(messageFormInput.getValue()));
        messageFormInput.setProps({
          value: "",
        });
      }
    }

    const messageFormProps: MessageFormProps = {
      components: { messageFormInput },
      events: {
        submit: send,
        keyup: (e: Event) => {
          //@ts-ignore
          if (e.keyCode === 13) {
            send(e);
          }
        },
      },
    };
    const messageForm = new MessageForm(messageFormProps);

    const chatProps: PageProps = {
      components: {
        openButton,
        userSettings,
        addChatDialog,
        chatList,
        chatHeader,
        chatSettings,
        chatMessages,
        addChatUserDialog,
        removeChatUserDialog,
        messageForm,
      },
      title: "Чат",
    };
    super(chatProps, tmpl);
  }

  componentDidMount(): void {
    chatsController.getChats();
  }
}

export default Chat;
