import Layout from "../../layout/gradient";
import Card from "../../components/card";
import LoginForm from "../../modules/loginForm";
import Link from "../../components/link";

import { LinkProps } from "../../common/types";
import { CardProps } from "../../common/types";
import { LayoutProps } from "../../common/types";

const linkToRegisterData: LinkProps = {
  data: {
    href: "/register",
    text: "Нет аккаунта?",
  },
};

const cardData: CardProps = {
  data: {
    content: LoginForm + new Link(linkToRegisterData).content,
    title: "Вход",
  },
};

const layoutData: LayoutProps = {
  data: {
    content: new Card(cardData).content,
  },
};

const page = new Layout(layoutData);

export default page;
