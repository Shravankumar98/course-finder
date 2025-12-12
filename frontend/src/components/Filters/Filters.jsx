import "./Filters.css";

const Filters = ({ category, level, setCategory, setLevel }) => {
  return (
    <div className="filters">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter-select"
      >
        <option value="">All Categories</option>
        <option value="Web">Web</option>
        <option value="Backend">Backend</option>
        <option value="Data">Data</option>
      </select>

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="filter-select"
      >
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Filters;
