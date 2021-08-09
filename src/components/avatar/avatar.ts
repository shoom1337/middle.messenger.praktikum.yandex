import Block from "../block";
import tmpl from "./avatar.tmpl";

import "./avatar.scss";

type AvatarProps = {
  src?: string;
};

class Avatar extends Block {
  constructor(props: AvatarProps) {
    super("div", props, tmpl);
  }
}

export { Avatar, AvatarProps };
