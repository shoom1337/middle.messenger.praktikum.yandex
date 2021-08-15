import Block from "../block";
import tmpl from "./chat-settings-button.tmpl";
import addIcon from "../../../static/plus.svg";
import removeIcon from "../../../static/minus.svg";

import "./chat-settings-button.scss";

type ChatSettingsButtonProps = {
  variant: "add" | "remove";
  text: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
};

class ChatSettingsButton extends Block {
  constructor(props: ChatSettingsButtonProps) {
    super(
      "fragment",
      {
        ...props,
        icon: props.variant === "add" ? addIcon : removeIcon,
      },
      tmpl,
    );
  }
}

export { ChatSettingsButton, ChatSettingsButtonProps };
