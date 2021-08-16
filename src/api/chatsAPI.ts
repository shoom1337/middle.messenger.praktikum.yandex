import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

export type CreateChatProps = {
  title: string;
};

class ChatsAPI extends BaseAPI {
  constructor() {
    super();
  }

  public getChats(data?: ObjectLiteral) {
    return this.get("/chats", { data: JSON.stringify(data), withCredentials: true });
  }

  public addChat(data: CreateChatProps) {
    return this.post("/chats", { data: JSON.stringify(data), withCredentials: true });
  }

  public addChatUsers(data: ObjectLiteral) {
    return this.put("/chats/users", { data: JSON.stringify(data), withCredentials: true });
  }

  public getChatUsers(data: ObjectLiteral) {
    return this.get(`/chats/${data.chatId}/users`, {
      data: JSON.stringify(data),
      withCredentials: true,
    });
  }

  public removeChatUsers(data: ObjectLiteral) {
    return this.delete("/chats/users", { data: JSON.stringify(data), withCredentials: true });
  }

  public getChatToken(data: ObjectLiteral) {
    return this.post(`/chats/token/${data.chatId}`, {
      data: JSON.stringify(data),
      withCredentials: true,
    });
  }
}

export default new ChatsAPI();
