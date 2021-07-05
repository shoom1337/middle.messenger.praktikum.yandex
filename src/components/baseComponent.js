class BaseComponent {
  constructor({ className, data, type = "", variant }) {
    this.className = className;
    this.data = data;
    this.type = type;
    this.variant = variant;
  }
}

export default BaseComponent;
