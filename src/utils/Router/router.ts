import Block from "../../components/block";
import Route from "./route";

const NOT_FOUND_PATH = "/404";

class Router {
  static __instance: Router;

  private routes: Route[];
  private history: History;
  private _currentRoute: Route | null;
  private _rootQuery: string;
  private _registeredPaths: string[];
  private _onRouteCallback: () => void;
  private _unprotectedPaths: `/${string}`[];

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this._registeredPaths = [];
    this._unprotectedPaths = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._onRouteCallback = () => {};
    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);
    this._registerPath(pathname);

    return this;
  }

  public start(): void {
    const pathname = this._isRouteRegistered(window.location.pathname)
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

    route.render();

    //   if (!this._unprotectedPaths.includes(pathname as `/${string}`)) {
    //     this._onRouteCallback();
    //   }
  }

  public go(pathname: string): void {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  public getRoute(pathname: string): Route {
    return this.routes.find((route) => route.match(pathname));
  }

  private _registerPath(pathname: string): void {
    this._registeredPaths.push(pathname);
  }

  private _isRouteRegistered(pathname: string): boolean {
    return this._registeredPaths.includes(pathname);
  }
}

export default Router;
