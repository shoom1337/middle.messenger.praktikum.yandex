export default `
  <div class="layout chat-layout">
    <section class="sidebar">
      <header class="sidebar__header">
        <div id="openButton"></div>
        <input class="sidebar__search" type="text" placeholder="Поиск"/>
      </header>
      <div id="chatList" class="chat-list"></div>
    </section>
    <div id="userSettings" class="hidden"></div>
    <section class="chat">
      <div id="chatHeader"></div>
      <div id="chatMessages"></div>
      <div id="messageForm"></div>
    </section>
    <div id="chatSettings" class="hidden"></div>
    <div id="addChatDialog" class="hidden"></div>
    <div id="addChatUserDialog" class="hidden"></div>
  </div>
`;
