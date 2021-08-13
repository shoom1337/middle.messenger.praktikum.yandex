import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

class AuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  public register(data: ObjectLiteral) {
    return this.post("/auth/signup", { data });
  }

  public login(data: ObjectLiteral) {
    return this.post("/auth/signin", {
      data,
      withCredentials: true,
    });
  }

  public getUser() {
    return this.get("/auth/user", {
      withCredentials: true,
    });
  }

  public logout() {
    return this.post("/auth/logout", {
      withCredentials: true,
    });
  }
}

export default new AuthAPI();
