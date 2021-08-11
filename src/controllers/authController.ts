import { ObjectLiteral } from "../common/types";
import Router from "../utils/Router";
import AuthAPI from "../api/authAPI";

class AuthController {
  protected _router: Router;
  private _api: AuthAPI;
  constructor() {
    this._router = new Router("#root");
    this._api = new AuthAPI();
  }
  public register(data: ObjectLiteral): void {
    return this._api
      .register(data)
      .then(() => {
        this._router.go("/login");
      })
      .catch((e) => console.log(e));
  }
}

export default AuthController;
