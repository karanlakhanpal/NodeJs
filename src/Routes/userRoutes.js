const express = require("express");
const { getUser, CreateUser, deleteUser, updateUser } = require("../Controllers/UserController");
const userRouter = express.Router();

userRouter.use(express.urlencoded({ extended: false }));

userRouter.get("/", getUser);

userRouter.post("/signup", CreateUser);

userRouter.patch("/:id", updateUser)

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
