type Indexed<T = any> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  const isObject = (obj: Indexed | unknown): boolean => {
    if (obj && typeof obj === "object") {
      return true;
    }
    return false;
  };

  if (!isObject(lhs) || !isObject(rhs)) {
    return rhs;
  }

  Object.keys(rhs).forEach((key) => {
    const lhsValue = lhs[key];
    const rhsValue = rhs[key];

    if (Array.isArray(lhsValue) && Array.isArray(rhsValue)) {
      lhs[key] = lhsValue.concat(rhsValue);
    } else if (isObject(lhsValue) && isObject(rhsValue)) {
      lhs[key] = merge(Object.assign({}, lhsValue), rhsValue);
    } else {
      lhs[key] = rhsValue;
    }
  });

  return lhs;
}

export default merge;
