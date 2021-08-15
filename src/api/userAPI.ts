import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

class UserAPI extends BaseAPI {
  constructor() {
    super();
  }

  public updateProfile(data: ObjectLiteral) {
    return this.put("/user/profile", { data: JSON.stringify(data), withCredentials: true });
  }

  public updatePassword(data: ObjectLiteral) {
    return this.put("/user/password", { data: JSON.stringify(data), withCredentials: true });
  }

  public updateAvatar(data: ObjectLiteral) {
    return this.put("/user/profile/avatar", {
      data: data,
      headers: {},
      withCredentials: true,
    });
  }

  public searchUsers(data: ObjectLiteral) {
    return this.post("/user/search", { data: JSON.stringify(data), withCredentials: true });
  }
}

export default new UserAPI();
