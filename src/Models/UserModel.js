const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "First name is required."],
    },
    lastName: {
      type: String,
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Others"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    mobileNo: {
      type: Number,
      required: [true, "Phone no is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm password is required"],
    },
    languages: [
      {
        language: {
          type: String,
          required: [true, "Language are required."],
        },
        fluency: {
          type: String,
          enum: ["Mother Tongue", "Fluent", "Certification"],
          required: true,
        },
        certificate: {
          type: String,
        },
      },
    ],
    domain: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Custom validator to ensure the languages array is not empty
userSchema.path("languages").validate({
  validator: function (value) {
    return value && value.length > 0; // Ensure the array is not empty
  },
  message: "At least one language is required.",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
