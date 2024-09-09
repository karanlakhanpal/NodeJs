const express = require("express");
const { getUser, CreateUser, deleteUser } = require("../Controllers/UserController");
const userRouter = express.Router();

userRouter.use(express.urlencoded({ extended: false }));

userRouter.get("/", getUser);

userRouter.post("/signup", CreateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
