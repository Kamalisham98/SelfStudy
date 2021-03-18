// Import
const fs = require("fs");

// Start Callback (ES5)
fs.readFile("../promise/contents/content1.txt", "utf-8", (err, content1) => {
  if (err) throw err;
  console.log(content1);
  fs.readFile("./content2.txt", "utf-8", (err, content2)=>{
      if(err) throw err;
      console.log(content2);
  })
});
