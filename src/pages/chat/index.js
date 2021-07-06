import Layout from "../../layout/blank";
import Link from "../../components/link";

import "./chat.scss";

const linksData = [
  {
    data: {
      href: "/login",
      text: "Логин",
    },
    className: "chat-page",
  },
  {
    data: {
      href: "/register",
      text: "Регистрация",
    },
    className: "chat-page",
  },
  {
    data: {
      href: "/404",
      text: "404",
    },
    className: "chat-page",
  },
  {
    data: {
      href: "/500",
      text: "500",
    },
    className: "chat-page",
  },
  {
    data: {
      href: "/edit",
      text: "Редактирование профиля",
    },
    className: "chat-page",
  },
  {
    data: {
      href: "/password",
      text: "Смена пароля",
    },
    className: "chat-page",
  },
  {
    data: {
      href: "/avatar",
      text: "Смена аватара",
    },
    className: "chat-page",
  },
];

const layoutData = {
  data: {
    title: "test",
    content: linksData.reduce((acc, item) => {
      return acc + new Link(item).render();
    }, ""),
  },
  className: "chat-page",
};

const page = new Layout(layoutData);

export default page;
