import { ObjectLiteral } from "../common/types";

export default function (list: ObjectLiteral[], user: ObjectLiteral): ObjectLiteral {
  return list.reduce((acc, item) => {
    acc.push({
      content: item.content,
      style: user.id === item.user_id ? "outgoing" : "incoming",
    });
    return acc;
  }, []);
}
