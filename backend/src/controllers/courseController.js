import { courses } from "../db.js";

const getCourses = (req, res) => {
  const { category, level } = req.query;

  let result = courses;

  if (category) {
    result = result.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (level) {
    result = result.filter(
      (c) => c.level.toLowerCase() === level.toLowerCase()
    );
  }

  res.json(result);
};

export { getCourses};
