import burger from "../../../static/burger.svg";
import attach from "../../../static/attach.svg";
import send from "../../../static/send.svg";

export default `
  <div class="layout chat-layout">
    <section class="sidebar">
      <header class="sidebar__header">
        <button class="sidebar__menu">
          <img src="${burger}" class="sidebar__menu-icon">
        </button>
        <input class="sidebar__search" type="text" placeholder="Поиск"/>
      </header>
      <div id="chatList" class="chat-list"></div>
    </section>
    <section class="chat">
      <div id="chatHeader"></div>
      <div id="chatMessages"></div>
      <form class="message-form">
        <button type="button" class="message-form__button">
          <img src="${attach}" class="message-form__attach-icon">
        </button>
        <input type="text" placeholder="Сообщение" class="message-form__input">
        <button type="submit" class="message-form__button">
          <img src="${send}" class="message-form__send-icon">
        </button>
      </form>
    </section>
  </div>
`;
