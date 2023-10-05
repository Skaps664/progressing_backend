const cp = require("child_process");
const { stdout, stderr } = require("process");

cp.exec("ls", (err, stdout, stderr) => {
  console.log(stdout);
});
