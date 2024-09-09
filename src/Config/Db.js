const mongoose = require("mongoose");

const connectDb = (url) => {
  mongoose
    .connect(url)
    .then((response) => console.log("Database connected successfully"))
    .catch((error) => console.log("Error: ", error));
};

module.exports = connectDb;
