const express = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getSingleUser,
  destroyUsers,
} = require("../controller/user");
const router = express.Router();

router
  .route("/user")
  .get(getAllUsers)
  .post(addUser)
  .delete(destroyUsers);

router
  .route("/user/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
