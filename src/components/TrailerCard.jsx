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
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-4">
      <h2 className="text-xl font-bold mb-2 text-center">{movie.title}</h2>
      {trailerKey ? (
        <iframe
          className="w-full h-[60vh] md:h-[70vh] rounded-lg"
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