import Block from "./block";

const TITLE_POSTFIX = "Turbo messenger";

class Page extends Block {
  public title: string;

  constructor(props = { title: "default page" }, tmpl = "<div>default page</div>") {
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
