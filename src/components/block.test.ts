import { assert } from "chai";
import Block from "./block";

const func = () => {};

const options = {
  text: "example",
  events: {
    submit: func,
  },
};

const block = new Block("div", options, "<div>{{text}}</div>");

describe("Block", () => {
  it("render", () => {
    assert.equal(block.render(), "<div>example</div>");
  });

  it("event binding", () => {
    assert.equal(block.props.events.submit, func);
  });

  it("set props", () => {
    block.setProps({ text: "new text" });
    assert.equal(block.element.innerHTML, "<div>new text</div>");
  });
});
