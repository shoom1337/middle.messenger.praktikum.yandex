import { ObjectLiteral } from "../common/types";
import BaseAPI from "./baseAPI";

class AuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  public register(data: ObjectLiteral): void {
    this.post("/auth/signup", data);
  }

  public login(data: ObjectLiteral): void {
    this.post("/auth/signin", {
      data,
    }).then((r) => {
      console.log(r);
      this.getUser();
    });
  }

  public getUser(): void {
    this.get("/auth/user", {
      withCredentials: true,
    });
  }
}

export default AuthAPI;
