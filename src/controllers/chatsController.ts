// chatsAPI.createChat({ title: "chat888" }).then((r) => console.log(r));

import { ObjectLiteral } from "../common/types";
import chatsAPI, { CreateChatProps } from "../api/chatsAPI";
import { errorHandler } from "../utils/errorHandler";

import { store } from "../store";
import parseChatList from "../utils/parseChatList";
import { showAlert } from "../utils/showAlert";
import { router } from "../router";

class ChatsController {
  public getChats(data?: ObjectLiteral) {
    return chatsAPI
      .getChats(data)
      .then((chatList) => {
        store.setState({
          chatList: parseChatList(chatList),
        });
      })
      .catch(errorHandler);
  }

  public addChat(data: CreateChatProps) {
    return chatsAPI
      .addChat(data)
      .then((chatId) => {
        showAlert({
          variant: "success",
          message: "Created chat",
        });
        store.setState({
          showAddChatDialog: false,
          currentChatId: chatId,
        });
        router.go("/");
      })
      .catch(errorHandler);
  }

  public addChatUsers(data: ObjectLiteral) {
    return chatsAPI
      .addChatUsers(data)
      .then(() => {
        showAlert({ message: "Users added to chat", variant: "success" });
        store.setState({
          showAddChatUserDialog: false,
          findedUsers: false,
        });
        router.go("/");
      })
      .catch(errorHandler);
  }
}

export default new ChatsController();
