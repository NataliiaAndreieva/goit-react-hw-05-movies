import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Cast from "./Cast/Cast";
import Movies from "./Movies/Movies";
import Reviews from "./Reviews/Revievs";
import MovieDetails from "./MovieDetails/MovieDetails";
  
export const App = () => {
  return (
    <container>
      <header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<MovieDetails />}>
            <Route path="/" element={<Cast />} />
            <Route path="/" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to='/' /> } />
        </Routes >
     
    </container>
  );
}