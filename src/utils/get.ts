export default (object: object, path: string): any => {
  const keys: Array<String> = path
    .split(/[.[\]]/)
    .map((item) => item.trim())
    .filter((item) => item);
  let value: any = object;
  keys.forEach((element: string) => {
    value = value[element];
  });
  return value;
};
