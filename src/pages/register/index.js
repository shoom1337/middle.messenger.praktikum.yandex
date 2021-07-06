import Layout from "../../layout/gradient";
import Card from "../../components/card";
import RegisterForm from "../../modules/register";
import Link from "../../components/link";

const linkToLoginData = {
  data: {
    href: "/login",
    text: "Войти",
  },
};

const cardData = {
  data: {
    content: RegisterForm + new Link(linkToLoginData).content,
    title: "Регистрация",
  },
};

const layoutData = {
  data: {
    title: "test",
    content: new Card(cardData).content,
  },
};

const page = new Layout(layoutData);

export default page;
