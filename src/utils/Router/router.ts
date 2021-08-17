import Page from "../../components/page";
import Route from "./route";

const NOT_FOUND_PATH = "/404";

class Router {
  static __instance: Router;

  public history!: History;

  private routes!: Route[];
  private _currentRoute!: Route | null;
  private _rootQuery!: string;
  private _registeredPaths!: string[];
  private _checkAuth!: () => void;
  private _publicPaths = ["/login", "/register"];

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this._registeredPaths = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._publicPaths = [];
    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Page): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);
    this._registerPath(pathname);

    return this;
  }

  public start(): void {
    const pathname = this.isRouteRegistered(window.location.pathname)
      ? window.location.pathname
      : NOT_FOUND_PATH;

    window.onpopstate = () => {
      this._onRoute(pathname);
    };

    this._onRoute(pathname);
  }

  private _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();

    if (!this._publicPaths.includes(pathname)) {
      this._checkAuth();
    }
  }

  public currentRoutePathname(): string {
    if (!this._currentRoute) {
      return "";
    }
    return this._currentRoute.pathname;
  }

  public go(pathname: string): void {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  public getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  private _registerPath(pathname: string): void {
    this._registeredPaths.push(pathname);
  }

  public isRouteRegistered(pathname: string): boolean {
    return this._registeredPaths.includes(pathname);
  }

  public setPublicPaths(pathnames: string[], checkAuth: () => void): Router {
    this._checkAuth = checkAuth;
    this._publicPaths = pathnames;
    return this;
  }
}

export default Router;
