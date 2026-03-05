import Card from "../Card/Card";
import "./Movies.css";
import { useStore } from "../../../store/zustandStore";
export default function Movies() {
  const cards = useStore((state) => state.cards);
  const movies = cards?.data || [];
  const search = useStore((state) => state.search);

  return (
    <div className="movies">
      {movies
        .filter(
          (fmovie) =>
            fmovie.Title.toLowerCase().includes(search.toLowerCase()) ||
            fmovie.Genre.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie) => (
          <Card
            key={movie.imdbID}
            id={movie.imdbID}
            img={movie.Images[0]}
            title={movie.Title}
            year={movie.Year}
            runtime={movie.Runtime}
            genre={movie.Genre}
            language={movie.Language}
          />
        ))}
    </div>
  );
}
