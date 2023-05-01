// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes ");

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
  it("test for a triangle with a green background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

// Unit testing -> testing for a square with a purple background to render
describe("Square test", () => {
  it("test for a square with a grey background", () => {
    const shape = new Square();
    shape.setColor("grey");
    expect(shape.render()).toEqual(
      '<rect x="57" y="35" width="180" height="180" fill="grey" />'
    );
  });
});

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle test", () => {
  it("test for a circle with a orange background", () => {
    const shape = new Circle();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<circle cx="140" cy="120" r="80" fill="orange" />'
    );
  });
});