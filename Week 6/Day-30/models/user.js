const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete"); // Import mongoose-delete
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // can add setter here to turn everything lowercase
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
    // Enable timestamps
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// Encrypt Password
function encryptPassword(password) {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  return encryptedPassword;
}


// Enable soft delete
UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("user", UserSchema); // Export barang models