import Layout from "../../layout/gradient";
import Card from "../../components/card";
import LoginForm from "../../modules/loginForm";
import Link from "../../components/link";

const linkToRegisterData = {
  data: {
    href: "/register",
    text: "Нет аккаунта?",
  },
  className: "login-page",
};

const cardData = {
  data: {
    content: LoginForm + new Link(linkToRegisterData).content,
    title: "Вход",
  },
};

const layoutData = {
  data: {
    title: "test",
    content: new Card(cardData).content,
  },
  className: "login-page",
  title: "Логин",
};

const page = new Layout(layoutData);

export default page;
