// Shape class uses constructor to define what is a shape
class Shape {
    constructor() {
      this.color = "";
    }
    // Shape class will integrate setColor function
    setColor(ColorClass) {
      this.color = ColorClass;
    }
  }
  
  // Triangle class inherits properties defined in Shape class
  class Triangle extends Shape {
    render() {
      // Returns shape with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class inherits properties defined in Shape class
  class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="57" y="35" width="180" height="180" fill="${this.color}" />`;
    }
  }
  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shape {
    render() {
      // Returns shape with color input
      return `<circle cx="140" cy="120" r="80" fill="${this.color}" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };