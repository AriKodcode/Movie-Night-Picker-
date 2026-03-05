import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../store/zustandStore";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cards = useStore((state) => state.cards);
  const movies = cards.data.find((movie) => movie.imdbID === id);

  return (
    <div className="details">
      <button onClick={() => navigate("/")}>Back</button>
      <h1>
        {movies.Title} {movies.Year}
      </h1>
      <p>Pick your seats and enjoy</p>
      <div className="box">
        <div className="imgbox"></div>
      </div>
    </div>
  );
}
