const Users = require("../models/Users");

module.exports = {
  async addFriend(req, res) {
    try {
      const addedFriend = await Users.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $addToSet: { friends: req.params.friendId },
        },
        { new: true }
      );
      res.json(addedFriend);
    } catch (error) {
      res.json(error);
    }
  },
  async removeFriend(req, res) {
    try {
      const noFriend = await Users.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(noFriend);
    } catch (error) {
      res.json(error);
    }
  },
};
