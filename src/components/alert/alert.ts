import Block from "../block";
import tmpl from "./alert.tmpl";
import "./alert.scss";

type AlertProps = {
  variant: "success" | "error";
  message: string;
};

class Alert extends Block {
  constructor(props: AlertProps) {
    super("alert", props, tmpl);
  }
}

export { Alert, AlertProps };
