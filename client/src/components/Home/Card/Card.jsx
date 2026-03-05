import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({
  id,
  img,
  title,
  year,
  runtime,
  genre,
  language,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/details/${id}`);
      }}
    >
      <div className="card-img" style={{ backgroundImage: `url(${img})` }}>
        <h3>{title}</h3>
      </div>
      <div className="card-details">
        <div className="year">
          <p className="p1">Year</p>
          <p className="p2">{year}</p>
        </div>
        <div className="runtime">
          <p className="p1">Runtime</p>
          <p className="p2">{runtime}</p>
        </div>
        <div className="genre">
          <p className="p1">Genre</p>
          <p className="p2">{genre}</p>
        </div>
        <div className="language">
          <p className="p1">Language</p>
          <p className="p2">{language}</p>
        </div>
        <button className="selectSeats">Select Seats</button>
      </div>
    </div>
  );
}
