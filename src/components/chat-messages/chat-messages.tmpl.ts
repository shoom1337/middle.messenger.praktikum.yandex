import avatar from "../../../static/avatar.svg";

export default `
  <div class="chat-messages" id="chat-messages">
    <each {{message in messages}}>
      <div class="chat-message chat-message_{{ message.style }}">
        <img src="${avatar}" class="chat-message__avatar"/>
        <p class="chat-message__message chat-message__message_{{ message.style }}">
          {{ message.content }}
        </p>
      </div>
    </each>
  </div>
`;
