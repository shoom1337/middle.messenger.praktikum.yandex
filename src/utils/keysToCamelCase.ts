import { ObjectLiteral } from "../common/types";

export default (data: ObjectLiteral): ObjectLiteral => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc[convertKey(key)] = value;
    return acc;
  }, {} as ObjectLiteral);
};

function convertKey(str: string): string {
  if (!str.includes("_")) {
    return str;
  }
  const arr = str.split("_");
  for (let i = 1; i < arr.length; i++) {
    const word = arr[i];
    arr[i] = word[0].toUpperCase() + word.slice(1);
  }
  return arr.join("");
}
