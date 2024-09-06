import express from "express";

const friends = [
  {
    id: 0,
    name: "Umar falalu",
  },
  {
    id: 1,
    name: "Shamsuddeen falalu",
  },
  {
    id: 0,
    name: "Abdullahi falalu",
  },
];

const app = express();
app.use(express.json());

const PORT = 3000;

app.use((req, res, next) => {
  const startTime = Date.now();
  next();
  const delta = Date.now() - startTime;
  console.log(`${req.method} ${req.url} ${delta} ms`);
});

app.get("/", (req, res) => {
  res.status(200).send(`Welcome to greatIdeas nig ltd`);
});

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:friendId", (req, res, next) => {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];

  try {
    if (!friend) {
      res.status(400).json({
        error: "Friend not found",
      });
    }

    res.status(200).json(friend);
  } catch (error) {
    next(error);
  }
});

app.post("/friends", (req, res, next) => {
  try {
    const name = req.body.name;

    if (!name) {
      res.status(400).json({
        error: "Kindly provide name",
      });
    }

    const newFriend = {
      name: req.body.name,
      id: friends.length,
    };

    friends.push(newFriend);

    res.status(200).send(newFriend);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}...`);
});
