import Page from "../../components/page";
import tmpl from "./chat.tmpl";

import { ChatList } from "../../components/chat-list";
import { ChatHeader, ChatHeaderProps } from "../../components/chat-header";
import { ChatMessages, ChatMessagesProps } from "../../components/chat-messages";
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
        openButton,
        userSettings,
        addChatDialog,
        chatList,
        chatHeader,
        chatSettings,
        chatMessages,
        addChatUserDialog,
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
