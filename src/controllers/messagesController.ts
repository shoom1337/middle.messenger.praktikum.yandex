import chatsAPI from "../api/chatsAPI";
import config from "../config";
import { store } from "../store";

class MessagesController {
  private _ws: WebSocket;
  private _ping: any;

  constructor() {
    this._handleOpen = this._handleOpen.bind(this);
    this._handleMessage = this._handleMessage.bind(this);
    this._handleError = this._handleError.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  private _addEvents() {
    this._ws.addEventListener("open", this._handleOpen);
    this._ws.addEventListener("message", this._handleMessage);
    this._ws.addEventListener("error", this._handleError);
    this._ws.addEventListener("close", this._handleClose);
  }

  private _removeEvents() {
    this._ws.removeEventListener("open", this._handleOpen);
    this._ws.removeEventListener("message", this._handleMessage);
    this._ws.removeEventListener("error", this._handleError);
    this._ws.removeEventListener("close", this._handleClose);
  }

  private _handleOpen() {
    this._getMessages();
    this._ping = setInterval(() => {
      this._ws.send("");
    }, 10000);
  }

  private _handleMessage(event) {
    const data = JSON.parse(event.data);
    if (Array.isArray(data)) {
      if (!data.length) {
        store.setState({ messages: [] });
      } else if (data[0].id === 0) {
        store.setState({ messages: data });
      } else {
        const messages = [...store.state.messages, ...data];
        store.setState({ messages });
      }
    } else if (typeof data === "object" && data.type === "message") {
      const messages = [data, ...store.state.messages];
      store.setState({ messages });
    }
  }

  private _handleError(event) {
    console.log("socker error: ", event);
  }

  private _handleClose() {}

  public connect() {
    const chatId = store.state.currentChatId;
    const userId = store.state.user.id;
    if (!chatId) {
      return;
    }
    chatsAPI
      .getChatToken({
        chatId,
      })
      .then(({ token }) => {
        const url = `${config.WS_URL}/${userId}/${chatId}/${token}`;
        this._ws = new WebSocket(url);
        this._addEvents();
      });
  }

  private _getMessages() {
    this._ws.send(
      JSON.stringify({
        content: 0,
        type: "get old",
      }),
    );
  }

  public close() {
    if (this._ws) {
      clearInterval(this._ping);
      this._ws.close();
      this._removeEvents();
      store.setState({ messages: [] });
    }
  }

  public send(message: string) {
    this._ws.send(
      JSON.stringify({
        content: message,
        type: "message",
      }),
    );
  }
}

export default new MessagesController();
