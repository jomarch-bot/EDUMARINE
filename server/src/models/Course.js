// Example Mongoose schema (if using MongoDB)
const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  title: String,
  files: Number,
  teacher: String,
});
module.exports = mongoose.model("Course", CourseSchema);
