# Мессенджер 1337
[![tests](https://github.com/shoom1337/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg)](https://github.com/shoom1337/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)
[![Heroku](https://heroku-badge.herokuapp.com/?app=sheltered-springs-20342)](https://sheltered-springs-20342.herokuapp.com/)

## Описание

Это мой самостоятельный проект курса "Миддл-фронтенд разработчик" от Яндекс.Практикума.
На стороне клиента были запрещены любые библиотеки, кроме препроцессоров и TypeScript.

## В рамках проекта реализованы:
- EventBus и Block (минимальная реактивность)
- [Роутер](https://github.com/shoom1337/middle.messenger.praktikum.yandex/blob/main/src/utils/Router/route.ts)
- [Шаблонизатор](https://github.com/shoom1337/middle.messenger.praktikum.yandex/blob/main/src/utils/templator.ts)
- [Транспорт](https://github.com/shoom1337/middle.messenger.praktikum.yandex/blob/main/src/utils/fetch.ts) на основе XMLHttpRequest
- Тесты для компонентов и утилит
- Прекоммиты
- Автодеплой


## Функциональность

- Авторизация
- Создание чатов
- Управление пользователями в чате
- Обмен сообщениями через Websockets

## Установка

Для запуска проекта необходимо выполнить следующие команды:
```
git clone https://github.com/shoom1337/middle.messenger.praktikum.yandex.git
cd middle.messenger.praktikum.yandex
git checkout sprint_3
npm install
npm run start
```
- [http://localhost:3000](http://localhost:3000) — сервер запустится на порту 3000.

Для сборки production:

- `npm run build`


## TODO
### Блок
- Перейти с id на uuid
- Убрать лишнюю вложенность div в div
- Исправить работу с событиями

### Типы
- Типизировать сущности вместо использования ObjectLiteral

### Шаблонизатор
- Добавить <if> для отображения контента по условию

### Общее
- Дореализовать оставшийся функционал мессенджера:
    - Удаление чата
    - Файлы в сообщениях
    - Оживить список чатов
    - Добавить стикеры/смайлы
