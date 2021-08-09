import Block from "../../../components/block";
import { Link, LinkProps } from "../../../components/link";
import { Error, ErrorProps } from "../../../components/error";
import tmpl from "../error.tmpl";

import "../../../global.scss";
import "../error.scss";

type ErrorPageProps = {
  components: {
    error: Error;
    link: Link;
  };
};

class Page404 extends Block {
  constructor() {
    const errorProps: ErrorProps = {
      message: "Я что-то нажал и все исчезло",
      status: 404,
    };
    const error = new Error(errorProps);

    const linkProps: LinkProps = {
      href: "/",
      text: "Назад к чатам",
    };
    const link = new Link(linkProps);

    const errorPageProps: ErrorPageProps = {
      components: {
        error,
        link,
      },
    };

    super("main", errorPageProps, tmpl);
  }
}
export default Page404;
