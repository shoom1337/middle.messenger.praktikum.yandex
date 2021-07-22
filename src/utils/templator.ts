import get from "./get";

export type ctxProps = { [key: string]: any };

class Templator {
  _template: string;

  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: ctxProps): string {
    return this._compileTemplate(ctx);
  }

  _compileTemplate = (ctx: ctxProps): string => {
    let tmpl = this._template;

    let key = null;

    const regExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();

        const data = get(ctx, tmplValue);

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }

    return tmpl;
  };
}

export default Templator;
