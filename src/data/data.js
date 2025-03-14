
// Mock database for streaming service
export const mediaData = {
  movies: [
    {
      id: 'movie-1',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      genre: ['Sci-Fi', 'Action', 'Thriller'],
      releaseYear: 2010,
      runtime: '2h 28m',
      director: 'Christopher Nolan',
      starring: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
      rating: 8.8,
      imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: true
    },
    {
      id: 'movie-2',
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      genre: ['Drama', 'Crime'],
      releaseYear: 1994,
      runtime: '2h 22m',
      director: 'Frank Darabont',
      starring: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      rating: 9.3,
      imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: true
    },
    {
      id: 'movie-3',
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      genre: ['Action', 'Crime', 'Drama'],
      releaseYear: 2008,
      runtime: '2h 32m',
      director: 'Christopher Nolan',
      starring: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      rating: 9.0,
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false
    },
    {
      id: 'movie-4',
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      genre: ['Crime', 'Drama'],
      releaseYear: 1994,
      runtime: '2h 34m',
      director: 'Quentin Tarantino',
      starring: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
      rating: 8.9,
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false
    },
    {
      id: 'movie-5',
      title: 'The Lord of the Rings: The Return of the King',
      description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      releaseYear: 2003,
      runtime: '3h 21m',
      director: 'Peter Jackson',
      starring: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
      rating: 8.9,
      imageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0822045d55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false
    },
    {
      id: 'movie-6',
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      genre: ['Drama', 'Romance'],
      releaseYear: 1994,
      runtime: '2h 22m',
      director: 'Robert Zemeckis',
      starring: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
      rating: 8.8,
      imageUrl: 'https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false
    }
  ],
  tvShows: [
    {
      id: 'tv-1',
      title: 'Breaking Bad',
      description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
      genre: ['Crime', 'Drama', 'Thriller'],
      releaseYear: 2008,
      seasons: 5,
      creator: 'Vince Gilligan',
      starring: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
      rating: 9.5,
      imageUrl: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHR2JTIwc2hvd3xlbnwwfHwwfHx8MA%3D%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: true,
      episodes: [
        { id: 'tv-1-s01e01', title: 'Pilot', season: 1, episode: 1, duration: '58m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-1-s01e02', title: 'Cat\'s in the Bag...', season: 1, episode: 2, duration: '48m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-1-s01e03', title: '...And the Bag\'s in the River', season: 1, episode: 3, duration: '48m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-1-s02e01', title: 'Seven Thirty-Seven', season: 2, episode: 1, duration: '47m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-1-s02e02', title: 'Grilled', season: 2, episode: 2, duration: '48m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'tv-2',
      title: 'Game of Thrones',
      description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      genre: ['Action', 'Adventure', 'Drama'],
      releaseYear: 2011,
      seasons: 8,
      creator: 'David Benioff, D.B. Weiss',
      starring: ['Emilia Clarke', 'Peter Dinklage', 'Kit Harington'],
      rating: 9.3,
      imageUrl: 'https://images.unsplash.com/photo-1613087076553-26b60d4cc973?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWUlMjBvZiUyMHRocm9uZXN8ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: true,
      episodes: [
        { id: 'tv-2-s01e01', title: 'Winter Is Coming', season: 1, episode: 1, duration: '62m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-2-s01e02', title: 'The Kingsroad', season: 1, episode: 2, duration: '56m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-2-s01e03', title: 'Lord Snow', season: 1, episode: 3, duration: '58m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-2-s02e01', title: 'The North Remembers', season: 2, episode: 1, duration: '53m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-2-s02e02', title: 'The Night Lands', season: 2, episode: 2, duration: '54m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'tv-3',
      title: 'Stranger Things',
      description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
      genre: ['Drama', 'Fantasy', 'Horror'],
      releaseYear: 2016,
      seasons: 4,
      creator: 'Matt Duffer, Ross Duffer',
      starring: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
      rating: 8.7,
      imageUrl: 'https://images.unsplash.com/photo-1627873649417-c67f79857547?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmFuZ2VyJTIwdGhpbmdzfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'tv-3-s01e01', title: 'Chapter One: The Vanishing of Will Byers', season: 1, episode: 1, duration: '49m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-3-s01e02', title: 'Chapter Two: The Weirdo on Maple Street', season: 1, episode: 2, duration: '56m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-3-s01e03', title: 'Chapter Three: Holly, Jolly', season: 1, episode: 3, duration: '52m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-3-s02e01', title: 'Chapter One: MADMAX', season: 2, episode: 1, duration: '48m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-3-s02e02', title: 'Chapter Two: Trick or Treat, Freak', season: 2, episode: 2, duration: '56m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'tv-4',
      title: 'The Office',
      description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
      genre: ['Comedy'],
      releaseYear: 2005,
      seasons: 9,
      creator: 'Greg Daniels, Ricky Gervais, Stephen Merchant',
      starring: ['Steve Carell', 'Jenna Fischer', 'John Krasinski'],
      rating: 8.9,
      imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'tv-4-s01e01', title: 'Pilot', season: 1, episode: 1, duration: '23m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-4-s01e02', title: 'Diversity Day', season: 1, episode: 2, duration: '22m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-4-s01e03', title: 'Health Care', season: 1, episode: 3, duration: '22m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-4-s02e01', title: 'The Dundies', season: 2, episode: 1, duration: '21m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-4-s02e02', title: 'Sexual Harassment', season: 2, episode: 2, duration: '22m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'tv-5',
      title: 'The Crown',
      description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
      genre: ['Biography', 'Drama', 'History'],
      releaseYear: 2016,
      seasons: 5,
      creator: 'Peter Morgan',
      starring: ['Claire Foy', 'Olivia Colman', 'Imelda Staunton'],
      rating: 8.7,
      imageUrl: 'https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jvd258ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'tv-5-s01e01', title: 'Wolferton Splash', season: 1, episode: 1, duration: '57m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-5-s01e02', title: 'Hyde Park Corner', season: 1, episode: 2, duration: '61m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-5-s01e03', title: 'Windsor', season: 1, episode: 3, duration: '59m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-5-s02e01', title: 'Misadventure', season: 2, episode: 1, duration: '60m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-5-s02e02', title: 'A Company of Men', season: 2, episode: 2, duration: '54m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'tv-6',
      title: 'The Mandalorian',
      description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
      genre: ['Action', 'Adventure', 'Fantasy'],
      releaseYear: 2019,
      seasons: 3,
      creator: 'Jon Favreau',
      starring: ['Pedro Pascal', 'Carl Weathers', 'Giancarlo Esposito'],
      rating: 8.7,
      imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZGFsb3JpYW58ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'tv-6-s01e01', title: 'Chapter 1: The Mandalorian', season: 1, episode: 1, duration: '39m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-6-s01e02', title: 'Chapter 2: The Child', season: 1, episode: 2, duration: '32m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-6-s01e03', title: 'Chapter 3: The Sin', season: 1, episode: 3, duration: '37m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-6-s02e01', title: 'Chapter 9: The Marshal', season: 2, episode: 1, duration: '54m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'tv-6-s02e02', title: 'Chapter 10: The Passenger', season: 2, episode: 2, duration: '42m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    }
  ],
  anime: [
    {
      id: 'anime-1',
      title: 'Attack on Titan',
      description: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
      genre: ['Action', 'Adventure', 'Drama'],
      releaseYear: 2013,
      seasons: 4,
      creator: 'Hajime Isayama',
      starring: ['Yuki Kaji', 'Yui Ishikawa', 'Marina Inoue'],
      rating: 9.0,
      imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: true,
      episodes: [
        { id: 'anime-1-s01e01', title: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1', season: 1, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-1-s01e02', title: 'That Day: The Fall of Shiganshina, Part 2', season: 1, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-1-s01e03', title: 'A Dim Light Amid Despair: Humanity\'s Comeback, Part 1', season: 1, episode: 3, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-1-s02e01', title: 'Beast Titan', season: 2, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-1-s02e02', title: 'I\'m Home', season: 2, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'anime-2',
      title: 'Death Note',
      description: 'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.',
      genre: ['Mystery', 'Psychological', 'Thriller'],
      releaseYear: 2006,
      seasons: 1,
      creator: 'Tsugumi Ohba',
      starring: ['Mamoru Miyano', 'Brad Swaile', 'Vincent Tong'],
      rating: 9.0,
      imageUrl: 'https://images.unsplash.com/photo-1637339603108-0243a7eb5d4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: true,
      episodes: [
        { id: 'anime-2-s01e01', title: 'Rebirth', season: 1, episode: 1, duration: '23m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-2-s01e02', title: 'Confrontation', season: 1, episode: 2, duration: '23m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-2-s01e03', title: 'Dealings', season: 1, episode: 3, duration: '23m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-2-s01e04', title: 'Pursuit', season: 1, episode: 4, duration: '23m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-2-s01e05', title: 'Tactics', season: 1, episode: 5, duration: '23m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'anime-3',
      title: 'Fullmetal Alchemist: Brotherhood',
      description: 'Two brothers search for a Philosopher\'s Stone after an attempt to revive their deceased mother goes wrong and leaves them in damaged physical forms.',
      genre: ['Action', 'Adventure', 'Drama'],
      releaseYear: 2009,
      seasons: 1,
      creator: 'Hiromu Arakawa',
      starring: ['Romi Park', 'Rie Kugimiya', 'Shinichiro Miki'],
      rating: 9.1,
      imageUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'anime-3-s01e01', title: 'Fullmetal Alchemist', season: 1, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-3-s01e02', title: 'The First Day', season: 1, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-3-s01e03', title: 'City of Heresy', season: 1, episode: 3, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-3-s01e04', title: 'An Alchemist\'s Anguish', season: 1, episode: 4, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-3-s01e05', title: 'Rain of Sorrows', season: 1, episode: 5, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'anime-4',
      title: 'One Punch Man',
      description: 'The story of Saitama, a hero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge.',
      genre: ['Action', 'Comedy', 'Sci-Fi'],
      releaseYear: 2015,
      seasons: 2,
      creator: 'ONE',
      starring: ['Makoto Furukawa', 'Kaito Ishikawa', 'Max Mittelman'],
      rating: 8.8,
      imageUrl: 'https://images.unsplash.com/photo-1591123720164-de1348028a82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1lfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'anime-4-s01e01', title: 'The Strongest Man', season: 1, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-4-s01e02', title: 'The Lone Cyborg', season: 1, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-4-s01e03', title: 'The Obsessive Scientist', season: 1, episode: 3, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-4-s02e01', title: 'Return of the Hero', season: 2, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-4-s02e02', title: 'The Human Monster', season: 2, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'anime-5',
      title: 'My Hero Academia',
      description: 'A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.',
      genre: ['Action', 'Adventure'],
      releaseYear: 2016,
      seasons: 5,
      creator: 'Kohei Horikoshi',
      starring: ['Daiki Yamashita', 'Nobuhiko Okamoto', 'Ayane Sakura'],
      rating: 8.4,
      imageUrl: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFuaW1lfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'anime-5-s01e01', title: 'Izuku Midoriya: Origin', season: 1, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-5-s01e02', title: 'What It Takes to Be a Hero', season: 1, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-5-s01e03', title: 'Roaring Muscles', season: 1, episode: 3, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-5-s02e01', title: 'That\'s the Idea, Ochaco', season: 2, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-5-s02e02', title: 'Roaring Sports Festival', season: 2, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    },
    {
      id: 'anime-6',
      title: 'Demon Slayer',
      description: 'A young man\'s family is slaughtered and his sister is transformed into a demon. He embarks on a quest to cure her and avenge his family.',
      genre: ['Action', 'Fantasy'],
      releaseYear: 2019,
      seasons: 3,
      creator: 'Koyoharu Gotouge',
      starring: ['Natsuki Hanae', 'Akari Kito', 'Hiro Shimono'],
      rating: 8.7,
      imageUrl: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFuaW1lfGVufDB8fDB8fHww',
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      isFeatured: false,
      episodes: [
        { id: 'anime-6-s01e01', title: 'Cruelty', season: 1, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-6-s01e02', title: 'Trainer Sakonji Urokodaki', season: 1, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-6-s01e03', title: 'Sabito and Makomo', season: 1, episode: 3, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-6-s02e01', title: 'Sound Hashira Tengen Uzui', season: 2, episode: 1, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' },
        { id: 'anime-6-s02e02', title: 'Infiltrating the Entertainment District', season: 2, episode: 2, duration: '24m', videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }
      ]
    }
  ]
};

// Helper functions to work with the data
export const getAllMedia = () => {
  return [
    ...mediaData.movies,
    ...mediaData.tvShows,
    ...mediaData.anime
  ];
};

export const getMovies = () => mediaData.movies;
export const getTVShows = () => mediaData.tvShows;
export const getAnime = () => mediaData.anime;

export const getMediaById = (id) => {
  return getAllMedia().find(item => item.id === id);
};

export const searchMedia = (query) => {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return getAllMedia().filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) || 
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.genre.some(g => g.toLowerCase().includes(lowercaseQuery))
  );
};

// Get episodes for a specific media
export const getEpisodesForMedia = (mediaId) => {
  const media = getMediaById(mediaId);
  return media?.episodes || [];
};

// Get a specific episode by id
export const getEpisodeById = (episodeId) => {
  let foundEpisode = null;
  
  getAllMedia().forEach(media => {
    if (media.episodes) {
      const episode = media.episodes.find(ep => ep.id === episodeId);
      if (episode) {
        foundEpisode = { ...episode, mediaId: media.id, mediaTitle: media.title };
      }
    }
  });
  
  return foundEpisode;
};
