const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "asherushare",
    content: "I love coding!"
  },
  {
    username: "shradhakhapra",
    content: "Hard work is important to achieve success"
  },
  {
    username: "rahulkumar",
    content: "I got selected for my 1st attempt"
  }
];

app.get("/posts",(req, res) => {
  res.render("index.ejs");
} )

app.listen(port, () => {
  console.log("listening on port: 8080");
})
