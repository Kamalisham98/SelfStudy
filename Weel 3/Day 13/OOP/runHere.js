const { User, Fish } = require("./child");

let user1 = new User(23, "kamal", "passkamal123", "nogopay123");

console.log(user1);
console.log(user1.forgetPassword());
console.log("")
console.log(User.totalOngkirParent());
console.log(user1.totalOngkir());

