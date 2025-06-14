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
    <div className="home-page" style={{ padding: '20px' }}>
      {movies.map((movie) => (
        <TrailerCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;