import { useState, useEffect, Fragment } from "react";
import Notiflix from "notiflix";

import { getTrendingMovies } from "services/fetchApi";
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies()
            .then(data => setMovies(data))
            .catch(() => {
                Notiflix.Notify.failure(
                    'Щось пішло не так. Перезавантажте сторінку)'
                );
            });
    }, []);

    return (
      <Fragment>
        <h2>Trending today</h2>
        <FilmList movies={movies} />
      </Fragment>
    );
}

export default Home;