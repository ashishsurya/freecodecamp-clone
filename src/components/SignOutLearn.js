import React from 'react';
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider';
import Certification from './Certification';
import './SignOutLearn.css';

export const getCertifications = () => {
  return [
    { id: 'responsive-web-design', title: 'Responsive Web Design', time: 300 },
    {
      id: 'javascript-algorithms-and-data-structures',
      title: 'JavaScript Algorithms and Data Structures',
      time: 300,
    },
    {
      id: 'front-end-web-development',
      title: 'Front End Development',
      time: 300,
    },
    { id: 'data-visualization', title: 'Data Visualization', time: 300 },
    {
      id: 'apis-and-microservices',
      title: 'APIs and Microservices',
      time: 300,
    },
    {
      id: 'scientific-computing-with-python',
      title: 'Scientific Computing with Python',
      time: 300,
    },
    {
      id: 'data-analysis-with-python',
      title: 'Data Analysis with Python',
      time: 300,
    },
  ];
};

const SignOutLearn = () => {
  const history = useHistory();

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='signoutlearn'>
      <header>Welcome to freeCodeCamp's curriculum.</header>
      <article style={{ fontWeight: 'bold' }}>
        Please slow down and read this
      </article>
      <article>
        freeCodeCamp is a proven path to your first software developer job.
      </article>
      <article>
        If you are new to programming, we recommend you start at the beginning
        and earn these certifications in order.
      </article>
      <article>
        To earn each certification, build its 5 required projects and get all
        their tests to pass.
      </article>
      <button
        onClick={() => history.push('/signin')}
        className='signoutlearn__signinButton'
      >
        Sign in to save your progress (it's free)
      </button>
      <div className='signoutlearn__certifications'>
        {getCertifications().map((certification) => (
          <Certification
            key={certification.id}
            id={certification.id}
            title={certification.title}
            time={certification.time}
          />
        ))}
      </div>
    </div>
  );
};

export default SignOutLearn;
