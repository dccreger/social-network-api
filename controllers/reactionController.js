const Thoughts = require("../models/Thoughts");

module.exports = {
  async addReaction(req, res) {
    try {
      const addedReaction = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {
          $addToSet: { reactions: req.body },
        },
        { new: true }
      );
      res.json(addedReaction);
    } catch (error) {
      res.json(error);
    }
  },
  async removeReaction(req, res) {
    try {
      const noReaction = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.body._id } } },
        { new: true }
      );
      res.json(noFriend);
    } catch (error) {
      res.json(error);
    }
  },
};
