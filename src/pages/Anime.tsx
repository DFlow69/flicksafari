
import React from 'react';
import Layout from '../components/Layout';
import MediaGrid from '../components/MediaGrid';
import { getAnime } from '../data/data';

const Anime: React.FC = () => {
  const anime = getAnime();

  return (
    <Layout>
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 animate-slide-down">Anime</h1>
        <MediaGrid items={anime} />
      </div>
    </Layout>
  );
};

export default Anime;
