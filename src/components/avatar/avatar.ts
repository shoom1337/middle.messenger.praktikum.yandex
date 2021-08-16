import Block from "../block";
import tmpl from "./avatar.tmpl";
import avatar from "../../../static/avatar.svg";

import "./avatar.scss";

type AvatarProps = {
  src?: string;
};

class Avatar extends Block {
  constructor(props: AvatarProps) {
    super("div", props, tmpl);
  }

  componentDidMount(): void {
    if (!this.props.src) {
      this.props.src = avatar;
    }
  }

  componentDidUpdate(): boolean {
    return this.props.src !== undefined;
  }
}

export { Avatar, AvatarProps };
