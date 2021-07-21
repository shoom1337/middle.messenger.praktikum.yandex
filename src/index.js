"use strict";
exports.__esModule = true;
var _500_1 = require("./pages/error/500");
var _404_1 = require("./pages/error/404");
var login_1 = require("./pages/login");
var register_1 = require("./pages/register");
var edit_1 = require("./pages/profile/edit");
var password_1 = require("./pages/profile/password");
var avatar_1 = require("./pages/profile/avatar");
var chat_1 = require("./pages/chat");
require("./global.scss");
var page;
switch (window.location.pathname) {
    case "/":
    case "/chat":
        page = chat_1["default"];
        break;
    case "/login":
        page = login_1["default"];
        break;
    case "/register":
        page = register_1["default"];
        break;
    case "/edit":
        page = edit_1["default"];
        break;
    case "/password":
        page = password_1["default"];
        break;
    case "/avatar":
        page = avatar_1["default"];
        break;
    case "/500":
        page = _500_1["default"];
        break;
    case "/404":
    default:
        page = _404_1["default"];
        break;
}
var wrapper = document.getElementById("root");
wrapper.innerHTML = page.content;
