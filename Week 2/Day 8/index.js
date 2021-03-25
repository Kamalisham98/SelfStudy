// Import and export

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function point() {
  rl.question("point: ", (value) => {
    console.log(value);
    rl.close();
  });
}

module.exports.point = point;
module.exports.rl = rl;
