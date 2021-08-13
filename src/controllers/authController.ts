import { ObjectLiteral } from "../common/types";
import authAPI from "../api/authAPI";
import { showAlert } from "../utils/showAlert";
import { errorHandler } from "../utils/errorHandler";

import { router } from "../router";

class AuthController {
  public login(data: ObjectLiteral): void {
    return authAPI
      .login(data)
      .then(() => {
        showAlert({ message: "Logged in", variant: "success" });
        router.go("/");
      })
      .catch(errorHandler);
  }

  public register(data: ObjectLiteral): void {
    return authAPI
      .register(data)
      .then(() => {
        showAlert({ message: "Registered", variant: "success" });
        router.go("/login");
      })
      .catch(errorHandler);
  }

  public logout(): void {
    return authAPI.logout().then(() => {
      showAlert({ message: "Logged out", variant: "success" });
      router.go("/login");
    });
  }

  public checkAuth() {
    return authAPI
      .getUser()
      .then((user) => {
        console.log(user);
        // store.setState({
        //   currentUser: user,
        // });
      })
      .catch((error) => {
        errorHandler(error);
        router.go("/login");
      });
  }
}

export default new AuthController();
