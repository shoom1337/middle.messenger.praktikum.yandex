export default `
<div class="modal__wrapper">
  <div class="modal__header">
    <p class="modal__title">{{title}}</p>
    <div id="closeRemoveChatUserButton"></div>
  </div>
  <form class="remove-chat-user__search" id="remove-chat-user-form">
    <each {{user in users}}>
      <label class="remove-chat-user__card">
        <input type="checkbox" value="{{user.id}}" name="{{user.login}}">
        {{user.login}}
      </label>
    </each>
  </form>
  <div id="removeChatUserButton"></div>
</div>`;
