function get(obj, path, defaultValue) {
  const keys = path.split(".");

  let result = obj;
  for (const key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }
  return result ?? defaultValue;
}

export default get;
