import avatar from "../../../static/avatar.svg";

export default `
  <div>
    <ul class="chat-list">
      <each {{item in chatList}}>
        <li id="chat-{{item.id}}" class="chat-list__item" data-chat-id={{item.id}}>
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
            <span class="chat-list__unread chat-list__unread_{{item.unreadCount}}">
              {{ item.unreadCount }}
            </span>
          </div>
        </li>
      </each>
    </ul>
    <div id="addChatButton"></div>
  </div>
`;
