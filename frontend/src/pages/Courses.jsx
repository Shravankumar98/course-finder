import React, { useEffect, useState } from "react";
import { getCourses } from "../api";
import Card from "../components/Card/Card";
import "./styles.css";
import Filters from "../components/Filters/Filters";

const Courses = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getCourses(category, level);

        if (!result || result.length === 0) {
          setCoursesList([]);
          return;
        }

        setCoursesList(result);
      } catch (err) {
        console.error("Error: ", err);

        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category, level]);

  return (
    <div className="main">
      <h1>Courses</h1>

      {/* Filters */}
      <Filters
        category={category}
        level={level}
        setCategory={setCategory}
        setLevel={setLevel}
      />

      {/* Results */}
      <div className="course-container">
        {loading ? (
          <p className="loading">Loading Courses...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : coursesList.length === 0 ? (
          <p className="empty">No Courses Found</p>
        ) : (
          coursesList.map((course) => (
            <Card
              key={course.id}
              id={course.id}
              title={course.title}
              category={course.category}
              level={course.level}
              clickable={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
