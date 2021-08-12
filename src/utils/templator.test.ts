import { assert } from "chai";
import Templator from "./templator";

describe("Templator", () => {
  describe("Replacing {{variable}} with value", () => {
    it("variable exists", () => {
      const template = "<div>{{text}}</div>";
      const templator = new Templator(template);
      const data = { text: 123 };
      assert.equal(templator.compile(data), "<div>123</div>");
    });

    it("variable undefined", () => {
      const template = "<div>{{text}}</div>";
      const templator = new Templator(template);
      const data = { text1: 123 };
      assert.equal(templator.compile(data), "<div>undefined</div>");
    });
  });

  describe("Each", () => {
    describe("Compile <each> block", () => {
      it("data array exists", () => {
        const template = `
          <each {{item in chatList}}>
            <li>
                {{ item.name }}
            </li>
          </each>`;

        const templator = new Templator(template);
        const data = {
          chatList: [
            {
              name: "Андрей",
            },
            {
              name: "Киноклуб",
            },
          ],
        };

        assert.equal(templator.compile(data), "<li>Андрей</li><li>Киноклуб</li>");
      });

      it("data array undefined", () => {
        const template = `
          <each {{item in chatList}}>
            <li>
                {{ item.name }}
            </li>
          </each>`;

        const templator = new Templator(template);
        const data = {};

        assert.equal(templator.compile(data), "Массив не найден");
      });
    });
  });
});
