import Block from "../../../components/block";
import { Link, LinkProps } from "../../../components/link";
import { Error, ErrorProps } from "../../../components/error";
import tmpl from "../error.tmpl";

import "../../../global.scss";
import "../error.scss";

type ErrorPageProps = {
  components: {
    error: Error,
    link: Link,
  },
};

class Page500 extends Block {
  constructor() {
    const errorProps: ErrorProps = {
      message: "Кто-то что-то нажал, а мы чиним",
      status: 500,
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
export default Page500;
