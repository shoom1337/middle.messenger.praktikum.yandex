import Block from "../block";
import tmpl from "./panel-link.tmpl";
import "./panel-link.scss";

type PanelLinkProps = {
  href: string;
};

class PanelLink extends Block {
  constructor(props: PanelLinkProps) {
    super("div", props, tmpl);
  }
}

export { PanelLink, PanelLinkProps };
