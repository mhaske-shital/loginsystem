const user = require("../model/user");
const bcrypt = require("bcryptjs")
exports.addUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)

    const result = await user.create(req.body);
    res.status(200).json({
      success: true,
      result,
      message: "User added successfully",
    });
  } catch (error) {

    next(error);
  }
};
exports.getSingleUser = async (req, res, next) => {
  try {
    const result = await user.findById(req.params.id);
    res.status(200).json({
      success: true,
      result,
      message: "User found successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const result = await user.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      result,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const result = await user.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({
      success: true,
      result,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await user.find();
    res.status(200).json({
      success: true,
      count: result.length,
      result,
      message: "Users fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.destroyUsers = async (req, res, next) => {
  try {
    const result = await user.deleteMany()
    res.status(200).json({
      success: true,
      result,
      message: "Users Detroyed successfully",
    });
  } catch (error) {
    next(error);
  }
};
