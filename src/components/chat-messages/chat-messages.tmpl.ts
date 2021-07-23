import avatar from "../../../static/avatar.svg";

export default `
  <div class="chat-messages">
    {{@ messages}}
      <div class="chat-message">
        <img src="${avatar}" class="chat-message__avatar"/>
        <p class="chat-message__message">
          {{ text }}
        </p>
      </div>
    {{@}}
  </div>
`;
