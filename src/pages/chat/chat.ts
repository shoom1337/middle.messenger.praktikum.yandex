import Block from "../../components/block";
import tmpl from "./chat.tmpl";

const linksData = [
  {
    href: "/login",
    text: "Логин",
  },
  {
    href: "/register",
    text: "Регистрация",
  },
  {
    href: "/404",
    text: "404",
  },
  {
    href: "/500",
    text: "500",
  },
  {
    href: "/edit",
    text: "Редактирование профиля",
  },
  {
    href: "/password",
    text: "Смена пароля",
  },
  {
    href: "/avatar",
    text: "Смена аватара",
  },
];

class Chat extends Block {
  constructor() {
    super("main", { links: linksData }, tmpl);
  }
}

export default Chat;
