import Layout from "../../layout/gradient";
import Error from "../../components/error";
import Link from "../../components/link";

import "./error.scss";

const errorData = {
  data: {
    message: "Я что-то нажал и все исчезло",
    status: 404,
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
