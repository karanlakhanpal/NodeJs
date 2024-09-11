const User = require("../Models/UserModel");

const CreateUser = async (req, res) => {
  try {
    let body = req.body;
    const newUser = await User.create({
      profilePicture: body.profilePicture,
      firstName: body.firstName,
      lastName: body.lastName,
      dob: body.dob,
      gender: body.gender,
      email: body.email,
      mobileNo: body.mobileNo,
      password: body.password,
      confirmPassword: body.confirmPassword,
      languages: body.languages,
      domain: body.domain,
    });
    res.status(201).json({ message: "User created successfully", data: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    let data = await User.find({});
    res.status(204).json(data);
  } catch (error) {
    res.status(204).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await User.findByIdAndUpdate(id, {
      lastName: req.body.lastName,
    });
    res.status(200).json({ message: "Resource updated successfully" });
  } catch (error) {
    res.status(200).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    console.log("id: ", id);
    let result = await User.findOneAndDelete(id);
    console.log(result.profilePicture);
    res.send(JSON.stringify("Deleted Successfully"));
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { CreateUser, getUser, updateUser, deleteUser };
