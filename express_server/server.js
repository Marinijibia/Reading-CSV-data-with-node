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

app.use((req, res, next) => {
  const startTime = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - startTime;
  console.log(`${delta} ms`);
});

app.use(express.json());

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

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Kindly provide a name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);

  res.json(newFriend);
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});
