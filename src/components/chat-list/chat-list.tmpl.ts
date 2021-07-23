import avatar from "../../../static/avatar.svg";

export default `
  <ul class="chat-list">
    {{@ list}}
      <li class="chat-list__item">
        <img src="${avatar}" class="chat-list__avatar"/>
        <div class="chat-list__item-content">
          <p class="chat-list__author">
            {{ name }}
          </p>
          <p class="chat-list__message">
            {{ text }}
          </p>
        </div>
        <div class="chat-list__info">
          <p class="chat-list__time">
            {{ time }}
          </p>
          <span class="chat-list__unread">
            {{ unreadCount }}
          </span>
        </div>
      </li>
    {{@}}
  </ul>
`;
