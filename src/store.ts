import Store from "./utils/store";

export const store = new Store({
  user: {},
  showSettings: false,
  chatList: [],
  showAddChatDialog: false,
  showAddChatUserDialog: false,
  showChatSettings: false,
  currentChatId: 0,
  findedUsers: [],
});
