import get from "./get";

import { ObjectLiteral } from "../common/types";

export type ctxProps = ObjectLiteral;

const TEMPLATE_REG_EXP = /^{{(.*?)}}$/;
const ITERATOR_REG_EXP = /<each\s{{(.*?)}}>([\s\S]*?)<\/each>/;
const ITERATOR_DELIMITER = " in ";
const MESSAGES = {
  ARRAY_NOT_FOUND: "Массив не найден",
  TEMPLATE_VAR_NOT_FOUND: "Ошибка поиска переменной",
};

const isVariable = (string: string) => {
  const regExp = TEMPLATE_REG_EXP;
  return regExp.test(string);
};

const getVariable = (string: string) => {
  const regExp = TEMPLATE_REG_EXP;
  const result = string.match(regExp);

  if (!result) {
    return `${MESSAGES.TEMPLATE_VAR_NOT_FOUND} ${string}`;
  }

  return result[1];
};

class Templator {
  _template: string;

  ITERATOR_START_REGEXP = /\{\{@ (.*?)\}\}/gi;
  ITERATOR_END_REGEXP = /\{\{@\}\}/gi;

  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: ctxProps): string {
    return this._compileTemplate(ctx);
  }

  _compileTemplate = (ctx: ctxProps): string => {
    let result = "";

    const elements = this._template
      .replace(/\s+/g, " ")
      .replace(/\{\{\s/g, "{{")
      .replace(/\s\}\}/g, "}}")
      // @ts-expect-error
      .replace(ITERATOR_REG_EXP, (substr, meta, template) => {
        const [item, key] = meta.split(ITERATOR_DELIMITER);
        const array = get(ctx, key);
        let result = "";
        if (!array) {
          return MESSAGES.ARRAY_NOT_FOUND;
        }
        for (let i = 0; i < array.length; i++) {
          const tmplString = `{{${item}`;
          const value = `{{${key}[${i}]`;
          result += template.split(tmplString).join(value);
        }
        return result;
      })
      .split(/(?<=>)|(?=<)|(?<=\}\})|(?=\{\{)/g)
      .map((item) => item.trim())
      .filter((item) => item);

    elements.forEach((item) => {
      result += isVariable(item) ? get(ctx, getVariable(item)) : item;
    });

    return result;
  };
}

export default Templator;
