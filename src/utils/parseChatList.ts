import { ObjectLiteral } from "../common/types";

function parseMessage(
  message = {
    user: {
      display_name: "",
      first_name: "",
    },
    content: "",
    time: "",
  },
) {
  if (!message || Object.keys(message).length === 0) {
    return;
  }
  return {
    name: message?.user.display_name || message?.user.first_name,
    content: message?.content,
    time: new Date(message?.time).toLocaleDateString("ru"),
  };
}

export default function (list: ObjectLiteral[]): ObjectLiteral {
  return list.reduce((acc, item) => {
    const result = {
      id: item.id,
      title: item.title,
      unreadCount: item.unread_count,
      lastMessage: parseMessage(item.last_message),
    };
    acc.push(result);
    return acc;
  }, []);
}
