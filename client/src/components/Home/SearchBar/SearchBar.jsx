import "./SearchBar.css";
import { useStore } from "../../../store/zustandStore";

export default function SearchBar() {
  const setQuery = useStore((state) => state.setQuery);
  const cards = useStore((state) => state.cards);
  const search = useStore((state) => state.search);
  const movies = cards?.data || [];

  const filterMovies = movies.filter(
    (fmovie) =>
      fmovie.Title.toLowerCase().includes(search.toLowerCase()) ||
      fmovie.Genre.toLowerCase().includes(search.toLowerCase())
  );

  const count = filterMovies.length;
  return (
    <div className="search-bar">
      <form className="input">
        <input
          type="text"
          placeholder="Search a movie"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <p className="how-many-movies">Showing {count} results</p>
    </div>
  );
}
