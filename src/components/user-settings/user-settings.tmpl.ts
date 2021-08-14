import burger from "../../../static/burger.svg";

export default `
  <section class="settinigs settings__wrapper">
    <div class="settings__header">
      <h1 class="settings__title">
        {{title}}
      </h1>
      <div id="toggleButton">
      <div id="closeButton"></div>
      </div>
    </div>
    <div id="settingsAvatar"></div>
    <h2 class="settings__user-name">
      {{user.name}}
    </h2>
    <ul class="settings__user-data">
      <li class="settings__user-property settings__property">
        <p class="settings__property-title">Почта</p>
        <p class="settings__property-value">{{user.email}}</p>
      </li>
      <li class="settings__user-property settings__property">
        <p class="settings__property-title">Логин</p>
        <p class="settings__property-value">{{user.login}}</p>
      </li>
      <li class="settings__user-property settings__property">
        <p class="settings__property-title">Имя</p>
        <p class="settings__property-value">{{user.first_name}}</p>
      </li>
      <li class="settings__user-property settings__property">
        <p class="settings__property-title">Фамилия</p>
        <p class="settings__property-value">{{user.second_name}}</p>
      </li>
      <li class="settings__user-property settings__property">
        <p class="settings__property-title">Имя в чате</p>
        <p class="settings__property-value">{{user.display_name}}</p>
      </li>
      <li class="settings__user-property settings__property">
        <p class="settings__property-title">Телефон</p>
        <p class="settings__property-value">{{user.phone}}</p>
      </li>
    </ul>
    <a href="/edit" class="settings__link">Изменить данные</a>
    <a href="/password" class="settings__link">Изменить пароль</a>
    <a href="/avatar" class="settings__link">Изменить аватар</a>
    <div id="logoutButton"></div>
  </section>`;
