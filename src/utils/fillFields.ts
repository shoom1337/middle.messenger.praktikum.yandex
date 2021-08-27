import { ObjectLiteral } from "../common/types";

export default function (data: ObjectLiteral, fields: ObjectLiteral): void {
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
