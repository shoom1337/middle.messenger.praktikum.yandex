import Fetch from "./fetch";
//@ts-ignore
import { XMLHttpRequest } from "xmlhttprequest";

const fetch = new Fetch();
//@ts-ignore
window.XMLHttpRequest = XMLHttpRequest;

describe("Fetch", () => {
  it("get", (done) => {
    fetch
      .get("https://jsonplaceholder.typicode.com/comments", { data: { postId: 2 } })
      .then(({ status }) => {
        if (status === 200) {
          done();
        } else {
          done(new Error("status is not 200"));
        }
      })
      .catch((e) => {
        if (e.status === 0) {
          done(new Error("ENOTFOUND. May be api-service unavailable?"));
          return;
        }
        done(e);
      });
  });

  it("post", (done) => {
    fetch
      .post("https://jsonplaceholder.typicode.com/comments", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        data: JSON.stringify({
          postId: 1,
          name: "comment",
          email: "test@test.com",
          body: "comment body",
        }),
      })
      .then(({ status }) => {
        if (status === 201) {
          done();
        } else {
          done(new Error("status is not 201"));
        }
      })
      .catch((e) => {
        if (e.status === 0) {
          done(new Error("ENOTFOUND. May be api-service unavailable?"));
          return;
        }
        done(e);
      });
  });
});
