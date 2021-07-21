import Layout from "../../layout/gradient";
import Card from "../../components/card";
import RegisterForm from "../../modules/register";
import Link from "../../components/link";

import { LinkProps } from "../../common/types";
import { CardProps } from "../../common/types";
import { LayoutProps } from "../../common/types";

const linkToLoginData: LinkProps = {
  data: {
    href: "/login",
    text: "Войти",
  },
};

const cardData: CardProps = {
  data: {
    content: RegisterForm + new Link(linkToLoginData).content,
    title: "Регистрация",
  },
};

const layoutData: LayoutProps = {
  data: {
    content: new Card(cardData).content,
  },
};

const page = new Layout(layoutData);

export default page;
