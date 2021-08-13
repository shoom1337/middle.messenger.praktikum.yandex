import { ObjectLiteral } from "../common/types";
import userAPI from "../api/userAPI";
import { showAlert } from "../utils/showAlert";
import { errorHandler } from "../utils/errorHandler";

import { router } from "../router";

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
}

export default new UserController();
