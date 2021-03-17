class Geometry {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
      this.#accessIntroduce();
  }
  #accessIntroduce() {
    console.log("Hello, this is Geometry");
  }
}

module.exports = Geometry;
