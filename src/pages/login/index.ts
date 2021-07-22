import Login from "./login";
import mount from "../../utils/mount";

const login = new Login();

mount("#root", login);

// setTimeout(() => {
//   login.setProps({
//     title: "yep",
//   });
// }, 1000);
