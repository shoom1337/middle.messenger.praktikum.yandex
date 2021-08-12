import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

class AuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  public register(data: ObjectLiteral) {
    return this.post("/auth/signup", { data });
  }

  public login(data: ObjectLiteral): void {
    this.post("/auth/signin", {
      data,
      withCredentials: true,
    }).then((r) => {
      this.getUser();
    });
  }

  public getUser(): void {
    this.get("/auth/user", {
      withCredentials: true,
    });
  }

  public logout(): void {
    this.post("/auth/logout", {
      withCredentials: true,
    });
  }
}

export default AuthAPI;
