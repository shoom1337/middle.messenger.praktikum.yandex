import avatar from "../../../static/avatar.svg";

export default `
  <ul class="chat-list">
    <each {{item in chatList}}>
      <li class="chat-list__item">
        <img src="${avatar}" class="chat-list__avatar"/>
        <div class="chat-list__item-content">
          <p class="chat-list__author">
            {{ item.name }}
          </p>
          <p class="chat-list__message">
            {{ item.text }}
          </p>
        </div>
        <div class="chat-list__info">
          <p class="chat-list__time">
            {{ item.time }}
          </p>
          <span class="chat-list__unread">
            {{ item.unreadCount }}
          </span>
        </div>
      </li>
    </each>
  </ul>
`;
