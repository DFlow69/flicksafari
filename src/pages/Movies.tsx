
import React from 'react';
import Layout from '../components/Layout';
import MediaGrid from '../components/MediaGrid';
import { getMovies } from '../data/data';

const Movies: React.FC = () => {
  const movies = getMovies();

  return (
    <Layout>
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 animate-slide-down">Movies</h1>
        <MediaGrid items={movies} />
      </div>
    </Layout>
  );
};

export default Movies;
