import Block from "./block";
import { PageProps } from "../common/types";

const TITLE_POSTFIX = "Turbo messenger";

class Page extends Block {
  public title: string;

  constructor(props: PageProps, tmpl: string) {
    super("main", props, tmpl);

    this.title = props.title;
    this._setDocumentTitle();
  }

  private _setDocumentTitle(): void {
    document.title = `${this.title} | ${TITLE_POSTFIX}`;
  }

  public componentDidMount(): void {}
}

export default Page;
