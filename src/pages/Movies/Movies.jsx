import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { getSearchMovie } from 'services/fetchApi';

import FilmList from 'components/FilmList';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getSearchMovie(query)
      .then(data => {
        if (data.length === 0) {
          Notiflix.Notify.failure(
            'Нічого не знайдено. Спробуйте інший запит.'
          );
        } else {
          setMovies(data);
        }
      })
      .catch(() => {
        Notiflix.Notify.failure('Щось пішло не так. Перезавантажте сторінку)');
      });
  }, [query]);

  function onSubmit(query) {
    setSearchParams({ query });
  }

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
};

export default Movies;
