const util = require("util");
const fs = require("fs");

var read = util.promisify(fs.readFile);

read("random.txt") //intetionally spelling wrong to use promise reject
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log("there is an error");
  });
