import Layout from "../../layout/gradient";
import Card from "../../components/card";
import LoginForm from "../../modules/loginForm";
import Link from "../../components/link";

import "./login.scss";

const linkToRegisterData = {
  data: {
    href: "/register",
    text: "Нет аккаунта?",
  },
  className: "login-page",
};

const cardData = {
  data: {
    content: LoginForm + new Link(linkToRegisterData).render(),
    title: "Вход",
  },
  className: "login-card",
};

const layoutData = {
  data: {
    title: "test",
    content: new Card(cardData).render(),
  },
  className: "login-page",
  title: "Логин",
};

const page = new Layout(layoutData);

export default page;
