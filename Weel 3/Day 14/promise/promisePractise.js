// Import
const fs = require("fs");

//make promise object
const readFile = (file, options) =>
  new Promise((success, failed) => {
    fs.readFile(file, options, (err, content) => {
      if (err) failed(err);
      return success(content);
    });
  });

readFile("./contents/content1.txt", "utf-8")
  .then((content1) => {
    console.log(content1);
  })
  .catch((err) => console.log("It's Wrong"));
