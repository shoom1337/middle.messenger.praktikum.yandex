import avatar from "../../../static/avatar.svg";

export default `
  <div class="chat-header">
    <img src="${avatar}" class="chat-header__avatar">
    <div class="chat-header__user-info">
      <p class="chat-header__user-name">
        {{ correspondent.name }}
      </p>
      <p class="chat-header__last-visit">
        {{ correspondent.lastVisit }}
      </p>
    </div>
    <div id="toggleChatSettingsButton"></div>
  </div>
`;
