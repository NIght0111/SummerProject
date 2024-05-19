import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await newUser.findByIdAndUpDate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await newUser.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const Users = await User.find(req.params.id);
    res.status(200).json(Users);
  } catch (error) {
    next(err);
  }
};
