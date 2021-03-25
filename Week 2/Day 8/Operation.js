const index = require("./index");

function standard() {
  console.log('------------------------');
  console.log("1. plus   (+)");
  console.log("2. minus  (-)");
  console.log("3. times  (*) ");
  console.log("4. divide (/)");
  console.log("5. Exit");
  index.rl.question("choose operation: ", (chosed) => {
    if (chosed == 5){
      index.rl.close();}else{
    index.rl.question("a : ", (a) => {
      index.rl.question("b : ", (b) => {
        if (chosed == 1) {
          console.log(Number(a) + Number(b));
          standard();
        } else if (chosed == 2) {
          console.log(Number(a) - Number(b));
          standard();
        } else if (chosed == 3) {
          console.log(a * b);
          standard();
        } else if (chosed == 4) {
          console.log(a / b);
          standard();
        }
      });
    });
  }
  });
}

standard();
