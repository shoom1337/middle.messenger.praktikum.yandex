import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

class AuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  public register(data: ObjectLiteral) {
    return this.post("/auth/signup", { data, withCredentials: false });
  }

  public login(data: ObjectLiteral) {
    return this.post("/auth/signin", {
      data,
    });
  }

  public getUser() {
    return this.get("/auth/user", {});
  }

  public logout() {
    return this.post("/auth/logout", {});
  }
}

export default new AuthAPI();
