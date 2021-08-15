import avatar from "../../../static/avatar.svg";

export default `
  <div>
    <ul class="chat-list">
      <each {{item in chatList}}>
        <li class="chat-list__item">
          <img src="${avatar}" class="chat-list__avatar"/>
          <div class="chat-list__item-content">
            <p class="chat-list__title">
              {{ item.title }}
            </p>
            <p class="chat-list__message">
              <span class="chat-list__author">
                {{item.lastMessage.name}}
              </span>
              {{ item.lastMessage.content }}
            </p>
          </div>
          <div class="chat-list__info">
            <p class="chat-list__time">
              {{ item.lastMessage.time }}
            </p>
            <span class="chat-list__unread">
              {{ item.unreadCount }}
            </span>
          </div>
        </li>
      </each>
    </ul>
    <div id="addChatButton"></div>
  </div>
`;
