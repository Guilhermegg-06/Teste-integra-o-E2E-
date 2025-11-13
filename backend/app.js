const express = require("express");
const app = express();
const users = [];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const novo = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(novo);
  res.status(201).json(novo);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "não achei" });
  res.json(user);
});

module.exports = app;