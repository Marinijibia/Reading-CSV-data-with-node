import { friends } from "../Model/friends.model.js";

export function getFriends(req, res) {
  res.status(200).json(friends);
}

export function getFriend(req, res, next) {
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
}

export function createFriend(req, res, next) {
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
}
