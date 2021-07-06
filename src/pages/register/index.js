import Layout from "../../layout/gradient";
import Card from "../../components/card";
import RegisterForm from "../../modules/register";
import Link from "../../components/link";

import "./register.scss";

const linkToLoginData = {
  data: {
    href: "/login",
    text: "Войти",
  },
  className: "register-page",
};

const cardData = {
  data: {
    content: RegisterForm + new Link(linkToLoginData).render(),
    title: "Регистрация",
  },
};

const layoutData = {
  data: {
    title: "test",
    content: new Card(cardData).content,
  },
  className: "register-page",
  title: "Регистрация",
};

const page = new Layout(layoutData);

export default page;
