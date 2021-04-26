import React from 'react';
import './Home.css';

const names = ['Apple', 'Google', 'Microsoft', 'Amazon', 'Spotify'];

const Home = () => {
  return (
    <div className='home'>
      <div className='home__Ad'>
        Learn to code - for free.
        <br />
        <br />
        Build projects.
        <br />
        <br />
        Earn certifications.
      </div>
      <div className='home__alumni'>
        <article>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </article>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '40px',
            padding: '2px',
          }}
          className='home__comapanyNames'
        >
          {names.map((name) => (
            <section className='home__companyName'>{name}</section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
