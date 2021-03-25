class Animal {
  constructor(name, gender) {
    //prototype
    this.name = name;
    this.gender = gender;
    this.speech = function () {
      return "Auu";
    };
  }
  greet() {
    return "Greetnya Animal";
  }
}

class Ongkir {
  #totalOngkir;
  constructor(berat) {
    this.berat = berat;
    this.#totalOngkir = function () {
      return this.berat * 200;
    };
  }
  static totalOngkirParent() {
    return "Total Ongkir Parent";
  }
  totalOngkir(){
      return this.#totalOngkir();
  }
}

module.exports = { Animal, Ongkir };
