import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://e-learning-management-system-server-site.vercel.app/course"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return [courses, setCourses];
};

export default useCourses;
