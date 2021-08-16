import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

class UserAPI extends BaseAPI {
  constructor() {
    super();
  }

  public updateProfile(data: ObjectLiteral) {
    return this.put("/user/profile", { data });
  }

  public updatePassword(data: ObjectLiteral) {
    return this.put("/user/password", { data });
  }

  public updateAvatar(data: ObjectLiteral) {
    return this.put(
      "/user/profile/avatar",
      {
        data: data,
        headers: {},
      },
      false,
    );
  }

  public searchUsers(data: ObjectLiteral) {
    return this.post("/user/search", { data });
  }
}

export default new UserAPI();
