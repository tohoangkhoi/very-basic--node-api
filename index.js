const express = require("express");
const cors = require("cors");
const { DummyUserManagement } = require("./classes");
const app = express();
const port = 8000;

app.use(
  cors({
    origin: process.env.FRONT_END_URL,
  })
);

const usersManagement = new DummyUserManagement();

app.get("/health", async (req, res) => {
  res.send({ status: 200, message: "okay" });
});

app.get("/users", async (req, res) => {
  res.send({
    data: usersManagement.getUsers(),
  });
});

app.get("/", async (req, res) => {
  res.send({ status: 200, message: "League of Legends is bad." });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
