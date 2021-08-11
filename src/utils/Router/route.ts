import Block from "../../components/block";
import { ObjectLiteral } from "../../common/types";

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) {
    root.append(block.getContent());
    return root;
  }
  return false;
}

class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: Block;
  _props;

  constructor(pathname: string, view: typeof Block, props: ObjectLiteral) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.remove();
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname;
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass("div", {}, "<div>render error</div>");
      render(this._props.rootQuery, this._block);
      return;
    }
    this._block.show();
  }
}

export default Route;
