
import React from 'react';
import Layout from '../components/Layout';
import MediaGrid from '../components/MediaGrid';
import { getTVShows } from '../data/data';

const TVShows: React.FC = () => {
  const tvShows = getTVShows();

  return (
    <Layout>
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 animate-slide-down">TV Shows</h1>
        <MediaGrid items={tvShows} />
      </div>
    </Layout>
  );
};

export default TVShows;
