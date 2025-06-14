import React, { useEffect, useState } from 'react';
import { fetchMovieTrailer } from '../api/tmdb';

const TrailerCard = ({ movie }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const loadTrailer = async () => {
      const key = await fetchMovieTrailer(movie.id);
      setTrailerKey(key);
    };
    loadTrailer();
  }, [movie.id]);

  return (
    <div className="trailer-card" style={{ marginBottom: '40px' }}>
      <h2>{movie.title}</h2>
      {trailerKey ? (
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={movie.title}
        />
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default TrailerCard;