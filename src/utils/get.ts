export default (object: { [key: string]: string }, path: string): string => {
  const keys: string[] = path
    .split(/[.[\]]/)
    .map((item) => item.trim())
    .filter((item) => item);
  let value: any = object;
  keys.forEach((element: string) => {
    if (value[element]) {
      value = value[element];
    } else {
      value = "";
    }
  });

  return value || "";
};
