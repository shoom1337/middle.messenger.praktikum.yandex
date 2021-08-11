import { ObjectLiteral } from "../common/types";

export function getFormData(form: HTMLFormElement): ObjectLiteral {
  const formData = new FormData(form);
  const result = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  return result;
}
