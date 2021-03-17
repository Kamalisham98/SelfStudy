const EventEmitter = require("events");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const my = new EventEmitter();

// make as event listener

my.on("Login Failed", (email, password) => {
  console.log(`${email} and ${password} is failed to login`);
  rl.close();
});

my.on("Login Success", (email) => {
  console.log(`${email} success to login!`);
  require("./assignmentII");
  rl.close();
});

function login(email, password) {
  const passwordStoredInDatabase = "123456";

  if (password != passwordStoredInDatabase) {
    my.emit("Login Failed", email, password);
  } else {
    my.emit("Login Success", email);
  }
}

rl.question("Email: ", (email) => {
  rl.question("Password: ", (password) => {
    login(email, password);
  });
});

// module.exports = { rl:rl};