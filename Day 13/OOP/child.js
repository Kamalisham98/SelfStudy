const { Ongkir, Animal } = require("./parent");

class Fish extends Animal {
  constructor(name, gender, makanan) {
    super("ikan", "cupang");
    this.makanan = makanan;
  }
  greet() {
    console.log("fishy greet");
  }
}

class User extends Ongkir {
  #password;
  #noGopay;
  constructor(berat, username, password, noGopay) {
    super(berat);
    this.username = username;
    this.#password = password;
    this.#noGopay = noGopay;
  }
  forgetPassword() {
    return this.#password;
  }
  forgetNoGopay(){
      return this.#noGopay;
  }
}

module.exports = { Fish, User };
