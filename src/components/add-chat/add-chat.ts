import Block from "../block";
import tmpl from "./add-chat.tmpl";
import { Input, InputProps } from "../input";
import { Button, ButtonProps } from "../button";
import { CloseButton, CloseButtonProps } from "../close-button";
import { store } from "../../store";

import chatsController from "../../controllers/chatsController";

import showHide from "../../utils/showHide";

type AddChatProps = {
  title: string;
  rootID: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
};
class AddChat extends Block {
  private rootID: string;

  constructor(props: AddChatProps) {
    const addChatInputProps: InputProps = {
      label: "Название",
      variant: "default",
      name: "chatName",
    };
    const addChatInput = new Input(addChatInputProps);

    const addChatButtonProps: ButtonProps = {
      text: "Добавить",
      events: {
        click() {
          chatsController.addChat({ title: addChatInput.getValue() });
        },
      },
    };
    const addChatButton = new Button(addChatButtonProps);

    const closeAddChatButtonProps: CloseButtonProps = {
      events: {
        click() {
          addChatInput.setProps({
            value: "",
          });
          store.setState({
            showAddChatDialog: false,
          });
        },
      },
    };
    const closeAddChatButton = new CloseButton(closeAddChatButtonProps);

    super(
      "modal",
      {
        ...props,
        components: {
          addChatInput,
          addChatButton,
          closeAddChatButton,
        },
      },
      tmpl,
    );

    this.rootID = props.rootID;
  }
  componentDidMount(): void {
    store.subscribe(({ showAddChatDialog }) => {
      showHide(this.rootID, showAddChatDialog);
    });
  }
}

export { AddChat, AddChatProps };
