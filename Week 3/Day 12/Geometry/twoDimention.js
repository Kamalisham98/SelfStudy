const Geometry = require("./geometry");

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, "Two Dimention");
  }
  interduce() {
    super.interduce();
    console.log("this is 2D file");
  }
  calculateArea() {
    console.log(`AREA`);
  }
}

module.exports = TwoDimention;