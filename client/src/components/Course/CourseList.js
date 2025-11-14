import React from "react";

const courses = [
  { title: "English - UNIT III", files: 10, teacher: "Leona Jimenez" },
  { title: "English - UNIT II", files: 12, teacher: "Cole Chandler" },
  { title: "UNIT I", files: 16, teacher: "Cole Chandler" },
];

const CourseList = () => (
  <div className="courses">
    {courses.map((c, idx) => (
      <div key={idx} className="course-card">
        <h3>{c.title}</h3>
        <p>{c.files} Files | Teacher: {c.teacher}</p>
      </div>
    ))}
  </div>
);

export default CourseList;
