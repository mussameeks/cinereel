import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import TrailerCard from '../components/TrailerCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  return (
    <div className="home-page h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {movies.map((movie) => (
        <div key={movie.id} className="snap-start h-screen flex items-center justify-center">
          <TrailerCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Home;