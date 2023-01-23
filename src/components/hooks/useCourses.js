import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://edulogy.onrender.com/course"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return [courses, setCourses];
};

export default useCourses;
