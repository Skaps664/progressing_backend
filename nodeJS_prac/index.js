const { isUtf8 } = require("buffer");
const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

// This is Blocking/Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf8");

// console.log(textIn);

// const textOut =
//   "This is what we know about the avocado: " +
//   textIn +
//   "\nCreated on " +
//   Date.now();

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written");

//------------------------------------------------------------

// This is non-blocking/asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile("./txt/" + data1 + ".txt", "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", data2 + "\n" + data3, "utf-8", (err) => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// });
// console.log("Reading this file...");

//-------
//SREVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "overview") {
    res.end("This is the overview");
  } else if (pathName == "/product") {
    res.end("This is the product page");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Listening to requests on prt 3000");
});