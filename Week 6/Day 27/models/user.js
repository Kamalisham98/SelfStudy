const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // NOT NULL
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      set: encryptPassword,
    },
    role: {
      type: String,
      default: "user",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// Encrypt password
function encryptPassword(password){
  const saltRound = 10 // Number of encrypting
  const encrytedPassword = bcrypt.hashSync(password, saltRound);
  return encrytedPassword;
}

//Enable soft delete
UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("user", UserSchema); // Export barang models
