import { ObjectLiteral } from "../common/types";
import Block from "../components/block";

export default function (data: ObjectLiteral, fields: Block[], avatar?: Block): void {
  if (!fields || Object.keys(data).length === 0) {
    return;
  }
  for (const key in fields) {
    const field = fields[key];
    const value = data[key.replace("Input", "")] || "";
    field.setProps({
      value,
    });
  }
}
