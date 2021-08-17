import Page from "../../../components/page";
import { Link, LinkProps } from "../../../components/link";
import { Error, ErrorProps } from "../../../components/error";
import tmpl from "../error.tmpl";

import { PageProps } from "../../../common/types";

class Page500 extends Page {
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

    const errorPageProps: PageProps = {
      components: {
        error,
        link,
      },
      title: "Внутренняя ошибка",
    };

    super(errorPageProps, tmpl);
  }
}
export default Page500;
