import config from "../../config";
export default `
<div class="modal__wrapper">
  <div class="modal__header">
    <p class="modal__title">{{title}}</p>
    <div id="closeAddChatUserButton"></div>
  </div>
  <div id="addChatUserInput"></div>
  <div id="searchUsersButton"></div>
  <form class="add-chat-user__search" id="add-chat-user-form">
    <each {{user in users}}>
      <label class="add-chat-user__card">
        <input type="checkbox" value="{{user.id}}" name="{{user.login}}">
        {{user.login}}
      </label>
    </each>
  </form>
  <div id="addChatUserButton"></div>
</div>`;
