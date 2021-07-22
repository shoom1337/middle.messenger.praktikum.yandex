function get(
  obj: { [key: string]: any },
  path: string,
  defaultValue = "Значение по умолчанию не задано",
): string {
  const keys = path.split(".");

  let result;
  for (const key of keys) {
    result = obj[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export default get;
