import "./Card.css";
import { useNavigate } from "react-router";

const Card = ({ id, title, category, level, clickable = true }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => (clickable ? navigate("/courses/" + id) : "")}
    >
      <h2 className="card-title">{title}</h2>

      <p className="card-subtitle">
        Category: {category} <br />
        Level: {level}
      </p>

      {clickable && <div className="card-footer">View Details →</div>}
    </div>
  );
};

export default Card;
