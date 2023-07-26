import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieCredits } from 'services/fetchApi';
import { List, Container, ListItem, Title } from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams;

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCasts(data))
      .catch(() => {
        Notiflix.Notify.failure('Щось пішло не так. Перезавантажте сторінку)');
      });
  }, [movieId]);

  if (!casts) return null;

  return (
    <Container>
      <List>
        {casts.map(cast => (
          <ListItem key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
                width="150px"
                height="200px"
              />
            ) : (
              <img
                src="https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=No+Image"
                alt="No Available Foto"
                width="150px"
                height="200px"
              />
            )}
            <Title>{cast.name}</Title>
            <p>Character: {cast.character}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Cast;
