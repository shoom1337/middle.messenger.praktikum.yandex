import Layout from "../../layout/gradient";
import Card from "../../components/card";
import RegisterForm from "../../modules/register";
import Link from "../../components/link";

import "./register.scss";

const registerLinkData = {
  data: {
    href: "/login",
    text: "Войти",
  },
  className: "register-link",
};

const cardData = {
  data: {
    content: RegisterForm + new Link(registerLinkData).render(),
    title: "Регистрация",
  },
  className: "login-card",
};

const layoutData = {
  data: {
    title: "test",
    content: new Card(cardData).render(),
  },
  className: "layout",
  title: "Регистрация",
};

const page = new Layout(layoutData);

export default page;
