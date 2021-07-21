// Generate BEM class name string
// const cn = new ClassNames('block');
// cn.g('elem', 'mod', 'type'); // 'block__elem_mod_type'

class ClassNames {
  constructor(blockName) {
    if (!blockName) {
      throw Error("block name required");
    }
    this.blockName = blockName.toString();
    this.elemSeparator = "__";
    this.modSeparator = "_";
  }

  g(elemName, modName, modVal) {
    const elemString = this.createElemString(elemName);
    const modString = this.createModString(modName, modVal);
    return `${this.blockName}${elemString}${modString}`;
  }

  createElemString(elemName) {
    return elemName ? `${this.elemSeparator}${elemName}` : "";
  }

  createModString(modName, modVal) {
    if (!modName) {
      return "";
    }
    const mod = modName ? `${this.modSeparator}${modName}` : "";
    const val = modVal ? `${this.modSeparator}${modVal}` : "";
    return mod + val;
  }
}

export default ClassNames;
