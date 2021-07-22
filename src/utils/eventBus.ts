type callbackType = (...args: any) => void;

class EventBus {
  listeners: { [key: string]: callbackType[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: callbackType): void {
    // console.log("on: ", event, callback);
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: callbackType): void {
    // console.log("off: ", event, callback);
    if (!this.listeners[event]) {
      throw Error(`Нет события ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter((fn) => fn !== callback);
  }

  emit(event: string, ...args: any[]): void {
    // console.log("emit: ", event);
    if (!this.listeners[event]) {
      throw Error(`Нет события ${event}`);
    }
    this.listeners[event].forEach(function (listener: callbackType) {
      listener(...args);
    });
  }
}

export default EventBus;
