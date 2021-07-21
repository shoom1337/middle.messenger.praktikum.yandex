import serverErrorPage from "./pages/error/500";
import notFoundPage from "./pages/error/404";
import loginPage from "./pages/login";
import registerPage from "./pages/register";
import profileEditPage from "./pages/profile/edit";
import passwordEditPage from "./pages/profile/password";
import avatarEditPage from "./pages/profile/avatar";
import chatPage from "./pages/chat";

import "./global.scss";

let page;

switch (window.location.pathname) {
  case "/":
  case "/chat":
    page = chatPage;
    break;

  case "/login":
    page = loginPage;
    break;

  case "/register":
    page = registerPage;
    break;

  case "/edit":
    page = profileEditPage;
    break;

  case "/password":
    page = passwordEditPage;
    break;

  case "/avatar":
    page = avatarEditPage;
    break;

  case "/500":
    page = serverErrorPage;
    break;

  case "/404":

  default:
    page = notFoundPage;
    break;
}

let wrapper = document.getElementById("root");

if (!wrapper) {
  wrapper = document.createElement("div");
  wrapper.id = "root";
}

wrapper.innerHTML = page.content;
