import serverErrorPage from "./pages/error/500";
import notFoundPage from "./pages/error/404";
import loginPage from "./pages/login";
import registerPage from "./pages/register";
import profileEditPage from "./pages/profile/edit";
import passwordEditPage from "./pages/profile/password";
import "./global.scss";

let page;

console.log(window.location.pathname);

switch (window.location.pathname) {
  case "/":
  case "/login":
    page = loginPage;
    break;

  case "/register":
    page = registerPage;
    break;

  case "/404":
    page = notFoundPage;
    break;

  case "/500":
    page = serverErrorPage;
    break;

  case "/profile/edit":
    page = profileEditPage;
    break;

  case "/profile/password":
    page = passwordEditPage;
    break;

  default:
    break;
}

const wrapper = document.getElementById("root");
wrapper.innerHTML = page.render();
