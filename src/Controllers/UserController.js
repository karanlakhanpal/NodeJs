const User = require("../Models/UserModel");

const CreateUser = async (req, res) => {
  let body = req.body;
  // console.log("body", body);
  const user = await User.create({
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
  console.log("user: ", user);
  res.send({ message: "Signup Successfully" });
};

const getUser = async (req, res) => {
  let data = await User.find({});
  res.send(JSON.stringify(data));
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  console.log('id: ', id)
  let result = await User.findOneAndDelete(id);
  console.log(result.profilePicture);
  res.send(JSON.stringify('Deleted Successfully'))
};

module.exports = { CreateUser, getUser, deleteUser };
