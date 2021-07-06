import Layout from "../../layout/gradient";
import Error from "../../components/error";
import Link from "../../components/link";

import "./error.scss";

const errorData = {
  data: {
    message: "Я что-то нажал и все исчезло",
    status: 404,
  },
  className: "error-404",
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
  title: "404",
  className: "page-404",
};

const page = new Layout(layoutData);

export default page;
