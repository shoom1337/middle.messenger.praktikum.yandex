import Templator from "./templator";

class Renderer {
  constructor(template, data) {
    this.template = template;
    this.data = data;
  }

  render() {
    const tmpl = new Templator(this.template);
    return tmpl.compile(this.data);
  }
}

export default Renderer;
