const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4} = require('uuid');

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("view engine", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "admin",
    content: "I love coding"
  },
  {
    id: uuidv4(),
    username: "admin2",
    content: "I love dancing"
  }, 
  {
    id: uuidv4(),
    username: "asheushare",
    content: "I got selected for my 1st internship"
  },
];

app.get('/posts', (req, res) => {
  res.render("index.ejs", {posts});
})

app.get('/posts/new', (req, res) => {
  res.render('new.ejs');
})

app.get('/posts/:id', (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render('show.ejs', { post });
});

app.post('/posts', (req, res) => {
  let {username, content} = req.body;
  let id = uuidv4();
  posts.push({id, username, content});
  res.redirect('/posts');
});

app.patch('/posts/:id', (req, res) => {
  let {id} = req.params;
  consolge.log(id);
  res.send('patch request working');
})

app.listen(port, () => {
  console.log("listening on port: 8080");
});

