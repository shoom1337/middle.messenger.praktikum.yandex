import { ObjectLiteral } from "../common/types";

export function getFormData(form: HTMLFormElement, keys?: string[]): ObjectLiteral {
  const formData = new FormData(form);
  const result = {} as ObjectLiteral;

  for (const [key, value] of formData.entries()) {
    if (keys && !keys.includes(key)) {
      continue;
    }
    result[key] = value;
  }

  return result;
}
