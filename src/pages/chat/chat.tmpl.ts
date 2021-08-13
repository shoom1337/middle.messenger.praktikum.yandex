import burger from "../../../static/burger.svg";

export default `
  <div class="layout chat-layout">
    <section class="sidebar">
      <header class="sidebar__header">
        <button class="sidebar__menu">
          <img src="${burger}" class="sidebar__menu-icon">
        </button>
        <div id="logoutButton"></div>
        <input class="sidebar__search" type="text" placeholder="Поиск"/>
      </header>
      <div id="chatList" class="chat-list"></div>
    </section>
    <section class="chat">
      <div id="chatHeader"></div>
      <div id="chatMessages"></div>
      <div id="messageForm"></div>
    </section>
  </div>
`;
