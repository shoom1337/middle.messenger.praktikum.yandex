import get from "./get";

export type ctxProps = { [key: string]: any };

class Templator {
  _template: string;

  ITERATOR_START_REGEXP = /\{\{@ (.*?)\}\}/gi;
  ITERATOR_END_REGEXP = /\{\{@\}\}/gi;

  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: ctxProps): string {
    const iteratedTmpl = this._compileIterators(ctx);
    return this._compileTemplate(ctx, iteratedTmpl);
  }

  _compileIterators = (ctx: ctxProps): string => {
    const tmpl = this._template;

    let key = null;

    let result = tmpl;

    const startIteratorRegExp = this.ITERATOR_START_REGEXP;
    const endIteratoregExp = this.ITERATOR_END_REGEXP;

    while ((key = startIteratorRegExp.exec(tmpl))) {
      if (key[1]) {
        const { endSubTmplIndex, subTmpl } = findSubTmplAndIndexes(key);

        let iteratorResult = "";
        for (let i = 0; i < ctx[key[1]].length; i++) {
          const itemData = ctx[key[1]][i];
          const item = this._compileTemplate(itemData, subTmpl);
          iteratorResult += item;
        }

        // TODO: fix this hell
        const start = tmpl.slice(0, key.index).trim();
        const toPoint = key.index + key[1].length + endSubTmplIndex + 5;
        const end = tmpl.slice(toPoint).trim().slice(5);

        result = start + iteratorResult + end;
      }
    }

    function findSubTmplAndIndexes(key) {
      const startSubTmplIndex = key.index + key[0].length;
      let subTmpl = tmpl.slice(startSubTmplIndex);

      if (!endIteratoregExp.exec(subTmpl)) {
        throw new Error("Templator: Iterator compile error. Syntax error?");
      }

      const endSubTmplIndex = subTmpl.indexOf("{{@}}");
      subTmpl = subTmpl.slice(0, endSubTmplIndex).trim();

      endIteratoregExp.lastIndex = 0;

      return {
        startSubTmplIndex,
        endSubTmplIndex,
        subTmpl,
      };
    }

    return result;
  };

  _compileTemplate = (ctx: ctxProps, tmpl: string): string => {
    let key = null;

    const regExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();

        const data = get(ctx, tmplValue);

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);

        regExp.lastIndex = 0;
      }
    }

    return tmpl;
  };
}

export default Templator;
