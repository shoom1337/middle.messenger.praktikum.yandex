import Block from "../block";
import defaultTmpl from "./input.tmpl";
import rowTmpl from "./input-row.tmpl";
import "./input.scss";

type InputProps = {
  label: string,
  name: string,
  value?: string,
  type?: string,
  variant?: "row" | "default",
};

class Input extends Block {
  constructor({ label, name, value = "", type = "text", variant = "default" }: InputProps) {
    const tmpl = variant === "row" ? rowTmpl : defaultTmpl;

    super("fragment", { label, name, value, type }, tmpl);
  }
}

export { Input, InputProps };
