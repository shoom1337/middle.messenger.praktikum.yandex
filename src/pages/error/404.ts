import Layout from "../../layout/gradient";
import Error from "../../components/error";
import Link from "../../components/link";

import { ErrorProps } from "../../common/types";
import { LinkProps } from "../../common/types";
import { LayoutProps } from "../../common/types";

import "./error.scss";

const errorData: ErrorProps = {
  data: {
    message: "Я что-то нажал и все исчезло",
    status: 404,
  },
};

const linkData: LinkProps = {
  data: {
    href: "/",
    text: "Назад к чатам",
  },
};

const layoutData: LayoutProps = {
  data: {
    content: new Error(errorData).content + new Link(linkData).content,
  },
};

const page = new Layout(layoutData);

export default page;
