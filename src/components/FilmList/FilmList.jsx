import { useLocation } from "react-router-dom";
import { LinkInfo } from "./FilmList.styled";

const FilmList = ({ movies }) => {
    const location = useLocation();
    return (
      <ul>
        {movies.map(movie => (
            <li key={movie.id}>
            <LinkInfo to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}</LinkInfo>
          </li>
        ))}
      </ul>
    );
}

export default FilmList;
