import Block from "../block";
import tmpl from "./link.tmpl";
import "./link.scss";

type LinkProps = {
  href: string,
  text: string,
};

class Link extends Block {
  constructor(props: LinkProps) {
    super("fragment", props, tmpl);
  }
}
export { Link, LinkProps };
