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
    return this.get("/chats", { data });
  }

  public addChat(data: CreateChatProps) {
    return this.post("/chats", { data });
  }

  public addChatUsers(data: ObjectLiteral) {
    return this.put("/chats/users", { data });
  }

  public getChatUsers(data: ObjectLiteral) {
    return this.get(`/chats/${data.chatId}/users`, {
      data,
    });
  }

  public removeChatUsers(data: ObjectLiteral) {
    return this.delete("/chats/users", { data });
  }

  public getChatToken(data: ObjectLiteral) {
    return this.post(`/chats/token/${data.chatId}`, {
      data,
    });
  }
}

export default new ChatsAPI();
