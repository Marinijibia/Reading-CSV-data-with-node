import express from "express";

import friendRoute from "./Router/friends.router.js";

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

app.use("/friends", friendRoute);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}...`);
});
