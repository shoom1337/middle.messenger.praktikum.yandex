import Layout from "../../layout/gradient";
import Error from "../../components/error";
import Link from "../../components/link";

import "./error.scss";

const errorData = {
  data: {
    message: "Кто-то что-то нажал, а мы чиним",
    status: 500,
  },
};

const linkData = {
  data: {
    href: "/",
    text: "Назад к чатам",
  },
};

const layoutData = {
  data: {
    content: new Error(errorData).content + new Link(linkData).content,
  },
};

const page = new Layout(layoutData);

export default page;
