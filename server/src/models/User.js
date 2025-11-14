const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // student | vendor | admin
});
module.exports = mongoose.model("User", UserSchema);
