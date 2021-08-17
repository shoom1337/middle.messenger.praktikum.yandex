import Router from "./router";
import Page from "../../components/page";
import { expect } from "chai";

describe("Router", () => {
  const router = new Router("#app");
  class Index extends Page {}
  class Login extends Page {}
  class Register extends Page {}

  router
    .use("/", Index)
    .use("/login", Login)
    .use("/register", Register)
    .setPublicPaths(["/", "/login", "/register"], () => true)
    .start();
  describe("History", () => {
    it("navigate 3 times", () => {
      router.go("/");
      router.go("/login");
      router.go("/register");
      expect(router.history.length).to.eq(1 + 3);
    });

    it("go", () => {
      router.go("/login");
      expect(router.currentRoutePathname()).to.eq("/login");
    });
  });

  describe("Route", () => {
    it("get route", () => {
      expect(router.getRoute("/register")?.pathname).to.eq("/register");
    });

    it("get undefined route", () => {
      expect(router.getRoute("/undefined-route")?.pathname).to.undefined;
    });

    it("route registered", () => {
      expect(router.isRouteRegistered("/register")).to.eq(true);
    });

    it("route do not registered", () => {
      expect(router.isRouteRegistered("/test")).to.eq(false);
    });
  });
});
