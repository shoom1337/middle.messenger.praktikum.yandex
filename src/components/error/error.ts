import Block from "../block";
import tmpl from "./error.tmpl";
import "./error.scss";

type ErrorProps = {
  message: string,
  status: number,
};

class Error extends Block {
  constructor(props: ErrorProps) {
    super("div", props, tmpl);
  }
}

export { Error, ErrorProps };
