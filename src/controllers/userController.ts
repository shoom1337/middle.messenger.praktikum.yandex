import { ObjectLiteral } from "../common/types";
import userAPI from "../api/userAPI";
import { showAlert } from "../utils/showAlert";
import { errorHandler } from "../utils/errorHandler";

import { router } from "../router";
import { store } from "../store";

class UserController {
  public updateProfile(data: ObjectLiteral): void {
    return userAPI
      .updateProfile(data)
      .then(() => {
        showAlert({ message: "Profile was updated successfully", variant: "success" });
        router.go("/");
      })
      .catch(errorHandler);
  }

  public updatePassword(data: ObjectLiteral): void {
    return userAPI
      .updatePassword(data)
      .then(() => {
        showAlert({ message: "Password was updated successfully", variant: "success" });
        router.go("/");
      })
      .catch(errorHandler);
  }

  public updateAvatar(data: ObjectLiteral): void {
    return userAPI
      .updateAvatar(data)
      .then(() => {
        showAlert({ message: "Avatar was updated successfully", variant: "success" });
        router.go("/");
      })
      .catch(errorHandler);
  }

  public searchUsers(data: ObjectLiteral): void {
    return userAPI
      .searchUsers(data)
      .then((users) => {
        store.setState({
          findedUsers: users,
        });
      })
      .catch(errorHandler);
  }
}

export default new UserController();
