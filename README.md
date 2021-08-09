[Ссылка на PR](https://github.com/shoom1337/middle.messenger.praktikum.yandex/pull/1)

## Описание

Самостоятельный проект курса "Миддл-фронтенд разработчик".

На данный момент доступны страницы:

- [Авторизация](https://relaxed-williams-5a7518.netlify.app/login.html)
- [Регистрация](https://relaxed-williams-5a7518.netlify.app/register.html)
- [404](https://relaxed-williams-5a7518.netlify.app/404.html)
- [5\*\*](https://relaxed-williams-5a7518.netlify.app/500.html)
- [Редактирование профиля](https://relaxed-williams-5a7518.netlify.app/profile/edit.html)
- [Смена пароля](https://relaxed-williams-5a7518.netlify.app/profile/password.html)
- [Загрузка аватара](https://relaxed-williams-5a7518.netlify.app/profile/avatar.html)
- [Страница чата](https://relaxed-williams-5a7518.netlify.app/)

## Новое во втором спринте
### Общее
- Внедрён TS
- Настроены линтеры: ESLint, StyleLint
- Добавлен .editconfig

### Шаблонизатор
- Добавлен функционал работы с циклом:
    ```
    <each {{message in messageList}}>
      <div class="chat-message chat-message_{{ message.style }}">
        <img src="${avatar}" class="chat-message__avatar"/>
        <p class="chat-message__message chat-message__message_{{ message.style }}">
          {{ message.text }}
        </p>
      </div>
    </each>
    ```
### Блок и EventBus
- Реализован компонентный подход с класса Block из теории 2 спринта
- Жизненный цикл внутри Block использует EventBus
- Наследуясь от блока реализованы следующие компоненты: Input, Link, Button и др.

### Формы
- Все формы и поля ввода проходят валидацию
- Отправка валидной формы выводит в консоль объект со всеми полями и значениями

### Fetch
- Реализован и типизирован класс Fetch(HTTPTransport): src/utils/fetch.js

## Установка

Для запуска проекта необходимо выполнить следующие команды:
```
git clone https://github.com/shoom1337/middle.messenger.praktikum.yandex.git
cd middle.messenger.praktikum.yandex
git checkout sprint_2
npm install
npm run start
```
- [http://localhost:3000](http://localhost:3000) — сервер запустится на порту 3000.

Для сборки production:

- `npm run build`

## Макет

Шаблоны страниц в [фигме](https://www.figma.com/file/Xa3tPYf1tIwoPKQcONZEqG/Chatic?node-id=0%3A1)

## Production в Netlify

Собранное приложение доступно по [ссылке](https://relaxed-williams-5a7518.netlify.app/).
