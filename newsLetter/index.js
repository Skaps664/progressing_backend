require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  var name = req.body.name;
  var email = req.body.mail;
  var ikt = req.body.how;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: { FNAME: name },
      },
    ],
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us21.api.mailchimp.com/3.0/lists/" + process.env.LIST_CODE,
    method: "POST",
    headers: {
      Authorization: `auth ${process.env.AUTH_KEY}`,
    },
    body: jsonData,
  };

  request(options, (error, response, body) => {
    if (error) {
      res.sendFile(__dirname + "/failure.html");
      console.log(error);
    } else {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
        console.log(response.statusCode);
      }
    }
  });
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server listening on port 3000");
});
