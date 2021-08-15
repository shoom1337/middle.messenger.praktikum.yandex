import Block from "../block";
import tmpl from "./chat-header.tmpl";
import { DotsButton } from "../dots-button/dots-button";

import "./chat-header.scss";
import { store } from "../../store";

type ChatHeaderProps = {
  correspondent: {
    name: string;
    lastVisit: string;
  };
};

class ChatHeader extends Block {
  constructor(props: ChatHeaderProps) {
    const toggleChatSettingsButton = new DotsButton({
      events: {
        click() {
          store.setState({
            showChatSettings: !store.state.showChatSettings,
          });
        },
      },
    });
    super(
      "header",
      {
        ...props,
        components: { toggleChatSettingsButton },
      },
      tmpl,
    );
  }
}

export { ChatHeader, ChatHeaderProps };
