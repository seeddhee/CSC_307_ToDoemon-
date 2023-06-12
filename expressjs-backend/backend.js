const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const userServices = require("./models/user-services");
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Taskemon-API-Service");
});

app.get("/users", async (req, res) => {
  res.send("You are at /users");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = await userServices.getUserById(id);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    result = { Users: result };
    res.send(result);
  }
});

app.post("/users", async (req, res) => {
  const userToAdd = req.body;
  const savedUser = await userServices.addUser(userToAdd);
  if (savedUser) {
    res.status(201).send(savedUser);
  } else {
    res.status(500).end();
  }
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const userToDelete = await userServices.getUserById(id);
  if (userToDelete == undefined || userToDelete == null) {
    res.status(404).send("Resource not found.");
  } else {
    const result = await userServices.deleteUser(userToDelete);
    res.status(204).send(result).end();
  }
});

app.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updatedUser = await userServices.patchUser(id, req.body);
  if (!updatedUser) {
    res.status(404).send("Resource not found.");
  } else {
    res.status(200).end();
  }
});

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
