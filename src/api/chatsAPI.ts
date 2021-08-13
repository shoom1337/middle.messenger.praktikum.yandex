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

  public createChat(data: CreateChatProps) {
    return this.post("/chats", { data: JSON.stringify(data), withCredentials: true });
  }
}

export default new ChatsAPI();
