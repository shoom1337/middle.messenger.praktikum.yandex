import Block from "../block";
import tmpl from "./message-form.tmpl";

import "./message-form.scss";
import { Input } from "../input";

type MessageFormProps = {
  components: {
    messageFormInput: Input;
  };
  events?: {
    submit: (event: Event) => void;
    keyup?: (event: Event) => void;
  };
};

class MessageForm extends Block {
  constructor(props: MessageFormProps) {
    super("div", props, tmpl);
  }
}

export { MessageForm, MessageFormProps };
