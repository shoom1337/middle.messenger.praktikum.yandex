import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import EditProfile from "./pages/profile/edit";
import ChangePassword from "./pages/profile/password";
import ChangeAvatar from "./pages/profile/avatar";

import Page404 from "./pages/error/404";
import Page500 from "./pages/error/500";

import { router } from "./router";
import authController from "./controllers/authController";

router
  .use("/", Chat)
  .use("/login", Login)
  .use("/register", Register)
  .use("/edit", EditProfile)
  .use("/password", ChangePassword)
  .use("/avatar", ChangeAvatar)
  .use("/500", Page500)
  .use("/404", Page404)
  .setPublicPaths(["/login", "/register", "/404", "/500"], authController.checkAuth)
  .start();
