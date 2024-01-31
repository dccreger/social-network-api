const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController.js");

const {
  addFriend,
  removeFriend,
} = require("../../controllers/friendController.js/index.js");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

//api/users/:userId/Friends/:friendId
router.route("/:userId/Friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
