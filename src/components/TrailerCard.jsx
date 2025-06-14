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
    <div className="w-full h-full flex flex-col justify-center items-center text-white px-4 py-8">
      {trailerKey ? (
        <div className="w-full max-w-md">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={movie.title}
            />
          </div>
          <h2 className="text-center text-2xl font-bold">{movie.title}</h2>
        </div>
      ) : (
        <p className="text-lg">Loading trailer...</p>
      )}
    </div>
  );
};

export default TrailerCard;