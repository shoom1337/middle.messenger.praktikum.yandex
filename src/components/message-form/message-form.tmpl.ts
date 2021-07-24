import attach from "../../../static/attach.svg";
import send from "../../../static/send.svg";

export default `
  <form class="message-form">
    <button type="button" class="message-form__button">
      <img src="${attach}" class="message-form__attach-icon">
    </button>
    <div id="messageFormInput"></div>
    <button type="submit" class="message-form__button">
      <img src="${send}" class="message-form__send-icon">
    </button>
  </form>
`;
