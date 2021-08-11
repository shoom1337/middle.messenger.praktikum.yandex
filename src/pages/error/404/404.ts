import Page from "../../../components/page";
import { Link, LinkProps } from "../../../components/link";
import { Error, ErrorProps } from "../../../components/error";
import tmpl from "../error.tmpl";

import { PageProps } from "../../../common/types";

class Page404 extends Page {
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

    const errorPageProps: PageProps = {
      components: {
        error,
        link,
      },
      title: "Страница не найдена",
    };

    super(errorPageProps, tmpl);
  }
}
export default Page404;
