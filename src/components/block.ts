import EventBus from "../utils/eventBus";
import Templator from "../utils/templator";

enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render"
}

class Block {
  _element!: HTMLElement;

  _tmpl!: string;

  _meta: {
    tagName: string,
    props: { [key: string]: any }
  };
  props: Record<string, any>;
  eventBus: EventBus;

  constructor(tagName = "fragment", props = {}, tmpl: string) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };
    this.props = this._makePropsProxy({ ...props });

    this._tmpl = tmpl;

    this._registerEvents();
    this.eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(): void {
    this.eventBus.on(EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.eventBus.emit(EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line
  componentDidMount(oldProps?: { [key: string]: any }): void {}

  _componentDidUpdate(oldProps?: { [key: string]: any }, newProps?: { [key: string]: any }): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps?: { [key: string]: any }, newProps?: { [key: string]: any }): boolean {
    return oldProps !== newProps;
  }

  setProps = (nextProps: { [key: string]: any }): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      let node: HTMLElement | null;
      if (eventName === "submit") {
        node = this.element.querySelector("form");
      } else {
        node = this.element.querySelector("input");
      }
      if (node) {
        node.addEventListener(eventName, events[eventName].bind(this));
      } else {
        this.element.addEventListener(eventName, events[eventName].bind(this));
      }
    });
  }

  removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element.removeEventListener(eventName, events[eventName].bind(this));
    });
  }

  insertInnerComponents(): void {
    if (this.props.components) {
      Object.entries(this.props.components).forEach(([key, value]) => {
        const node = this.element.querySelector(`#${key}`);
        if (!node) return;
        if (Array.isArray(value)) {
          value.forEach((value) => {
            node.appendChild(value.getContent());
          });
        } else {
          node.appendChild(value.getContent());
        }
      });
    }
  }

  _render(): void {
    const block = this.render();

    this.removeEvents();

    this._element.innerHTML = block;

    this.addEvents();

    this.insertInnerComponents();
  }

  render(): string {
    return new Templator(this._tmpl).compile(this.props);
   }

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props: { [key: string]: any }): { [key: string]: any }  {
    const self = this;

    return new Proxy(props, {
      get: (props, prop: string) => {
        const value = props[prop];
        return typeof value === "function" ? value.bind(props) : value;
      },
      set: (props, prop: string, value) => {
        props[prop] = value;
        self.eventBus.emit(EVENTS.FLOW_CDU, { ...props }, props);
        return true;
      },
      deleteProperty: () => {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);

    return element;
  }

  show(): void {
    this.getContent().classList.remove("hidden");
  }

  hide(): void {
    this.getContent().classList.add("hidden");
  }
}

export default Block;
