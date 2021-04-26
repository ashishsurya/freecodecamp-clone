import React from 'react';
import './Home.css';

const iconUrls = [
  {
    id: 1,
    url: 'http://madeuptheatre.com/wp-content/uploads/2019/09/73970c892d748c7507db8e10d71535b0-apple-logo-icon-by-vexels.png',
  },
  {
    id: 2,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
  },
  { id: 3, url: '' },
  { id: 4, url: '' },
  { id: 5, url: '' },
];

const Home = () => {
  return (
    <div className='home'>
      <div className='home__Ad'>
        Learn to code - for free.
        <br />
        Build projects.
        <br />
        Earn certifications.
      </div>
      <div className='home__alumni'>
        <article>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including
        </article>
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}
          className='home__comapanyLogos'
        >
          {iconUrls.map(({ url }) => (
            <img
              style={{ width: 100, objectFit: 'contain' }}
              src={url}
              alt=''
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
