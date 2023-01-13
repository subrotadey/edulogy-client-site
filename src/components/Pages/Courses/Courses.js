import React from "react";
import useCourses from "../../hooks/useCourses";
import Course from "./Course";

const Courses = () => {
  const [courses] = useCourses();
  
  return (
    <div className="pt-12">
      <h1>This is courses</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mx-12">
        {courses.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
