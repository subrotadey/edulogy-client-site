import React, { useEffect, useState } from "react";
import useCourses from "../../hooks/useCourses";
import Loading from "../Shared/Loading";
import Course from "./Course";


const Courses = () => {
  const [courses] = useCourses();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  return (
    <div className="flex justify-center	items-center">
      {
        loading ? 
        <Loading></Loading>
        :
        <div className="pt-12">
          <h1>This is courses</h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mx-12">
            {courses.map((course) => (
              <Course key={course._id} course={course}></Course>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Courses;
