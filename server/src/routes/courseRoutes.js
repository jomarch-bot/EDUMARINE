const express = require("express");
const { getAllCourses, createCourse } = require("../controllers/courseController");
const router = express.Router();
router.get("/", getAllCourses);
router.post("/", createCourse);
module.exports = router;
