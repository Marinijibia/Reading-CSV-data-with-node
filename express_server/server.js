import express from "express";

const app = express();
const PORT = 5000;

const friends = [
  {
    id: 0,
    name: "Umar Falalu",
  },
  {
    id: 1,
    name: "Shamsudden Falalu",
  },
  {
    id: 2,
    name: "Abdullahi Falalu",
  },
  {
    id: 3,
    name: "Umar Umar",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Welcome to FBC");
});

app.get("/friends", (req, res) => {
  res.status(200).send(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];

  if (!friend) {
    res.status(500).json({
      error: "Friend Not Found",
    });
  }

  res.status(200).send(friend);
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});
