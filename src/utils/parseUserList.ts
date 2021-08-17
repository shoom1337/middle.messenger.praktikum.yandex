import { ObjectLiteral } from "../common/types";

export default function (list: ObjectLiteral[]): ObjectLiteral {
  return list.reduce((acc, item) => {
    acc.push({
      login: item.login,
      avatar: item.avatar,
    });
  }, []);
}
