import axios from "axios";

const url = "http://localhost:3000/api/courses";

const getCourses = async (category = "", level = "") => {
  try {
    const params = {};

    if (category) params.category = category;
    if (level) params.level = level;

    const response = await axios.get(url, { params });

    return response.data;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export { getCourses };
