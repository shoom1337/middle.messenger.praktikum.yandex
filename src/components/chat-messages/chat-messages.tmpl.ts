import avatar from "../../../static/avatar.svg";

export default `
  <div class="chat-messages">
    <each {{message in messageList}}>
      <div class="chat-message chat-message_{{ message.style }}">
        <img src="${avatar}" class="chat-message__avatar"/>
        <p class="chat-message__message chat-message__message_{{ message.style }}">
          {{ message.text }}
        </p>
      </div>
    </each>
  </div>
`;
