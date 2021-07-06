import Layout from "../../layout/gradient";
import Error from "../../components/error";
import Link from "../../components/link";

import "./error.scss";

const errorData = {
  data: {
    message: "Кто-то что-то нажал, а мы чиним",
    status: 500,
  },
  className: "error-500",
};

const linkData = {
  data: {
    href: "/",
    text: "Назад к чатам",
  },
  className: "back-link",
};

const layoutData = {
  data: {
    content: new Error(errorData).render() + new Link(linkData).render(),
  },
  title: "500",
  className: "page-500",
};

const page = new Layout(layoutData);

export default page;
