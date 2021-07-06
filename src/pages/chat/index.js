import Layout from "../../layout/blank";
import Link from "../../components/link";

const linksData = [
  {
    data: {
      href: "/login",
      text: "Логин",
    },
  },
  {
    data: {
      href: "/register",
      text: "Регистрация",
    },
  },
  {
    data: {
      href: "/404",
      text: "404",
    },
  },
  {
    data: {
      href: "/500",
      text: "500",
    },
  },
  {
    data: {
      href: "/edit",
      text: "Редактирование профиля",
    },
  },
  {
    data: {
      href: "/password",
      text: "Смена пароля",
    },
  },
  {
    data: {
      href: "/avatar",
      text: "Смена аватара",
    },
  },
];

const layoutData = {
  data: {
    title: "test",
    content: linksData.reduce((acc, item) => {
      return acc + new Link(item).content;
    }, ""),
  },
  className: "chat-page",
};

const page = new Layout(layoutData);

export default page;
