import { ObjectLiteral } from "../../common/types";
import Page from "../../components/page";

function render(query: string, block: Page) {
  const root = document.querySelector(query);
  if (root) {
    root.append(block.getContent());
    return root;
  }
  return false;
}

class Route {
  public pathname: string;
  private _blockClass: typeof Page;
  private _block: Page | null;
  private _props: ObjectLiteral;

  constructor(pathname: string, view: typeof Page, props: ObjectLiteral) {
    this.pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public leave(): void {
    if (this._block) {
      this._block.remove();
    }
  }

  public match(pathname: string): boolean {
    return pathname === this.pathname;
  }

  public render(): void {
    this._block = new this._blockClass();
    render(this._props.rootQuery, this._block);
  }
}

export default Route;
