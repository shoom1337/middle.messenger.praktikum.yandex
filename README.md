## Описание

Самостоятельный проект курса "Миддл-фронтенд разработчик".

На данный момент создана структура проекта, базовые компоненты: Layout, Card, Form, Button, Input, Link.

При помощи этих компонентов свёрстаны следующие страницы:

- [Авторизация](https://relaxed-williams-5a7518.netlify.app/login)
- [Регистрация](https://relaxed-williams-5a7518.netlify.app/register)
- [404](https://relaxed-williams-5a7518.netlify.app/404)
- [5\*\*](https://relaxed-williams-5a7518.netlify.app/500)
- [Редактирование профиля](https://relaxed-williams-5a7518.netlify.app/edit)
- [Смена пароля](https://relaxed-williams-5a7518.netlify.app/password)
- [Загрузка аватара](https://relaxed-williams-5a7518.netlify.app/avatar)
- [Заглушка страницы чата](https://relaxed-williams-5a7518.netlify.app/)

## Установка

Для запуска проекта необходимо выполнить следующие команды:

- `git clone https://github.com/shoom1337/middle.messenger.praktikum.yandex.git` — клонировать репозиторий,
- `cd middle.messenger.praktikum.yandex` — перейти в директорию с проектом,
- `git checkout sprint_1` — переключить репозиторий на ветку разработки,
- `npm install` — установить зависимости,
- `npm run public` — запустить express с локальной раздачей статики (из папки ./public),
- `npm run start` — запустить сервера разработки,
- [http://localhost:3000](http://localhost:3000) — сервер запустится на порту 3000.

Для сборки production:

- `npm run build`

## Макет

Шаблоны страниц в [фигме](https://www.figma.com/file/Xa3tPYf1tIwoPKQcONZEqG/Chatic?node-id=0%3A1)

## Production в Netlify

Собранное приложение доступно по [ссылке](https://relaxed-williams-5a7518.netlify.app/).
