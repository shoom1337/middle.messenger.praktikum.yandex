import avatar from "../../../static/avatar.svg";
import dots from "../../../static/dots.svg";
export default `
  <div class="chat-header">
    <img src="${avatar}" class="chat-header__avatar">
    <div class="chat-header__user-info">
      <p class="chat-header__user-name">
        {{ correspondent.name }}
      </p>
      <p class="chat-header__last-visit">
        {{ correspondent.lastVisit }}
      </p>
    </div>
    <img src="${dots}" class="chat-header__menu">
  </div>
`;
