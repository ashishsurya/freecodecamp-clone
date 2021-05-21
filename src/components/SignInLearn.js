import React from 'react';
import { useStateValue } from '../StateProvider';
import Certification from './Certification';
import { getCertifications } from './SignOutLearn';
import './SignOutLearn.css'

const SignInLearn = () => {
  const [{ user }, dispatch] = useStateValue();
  const certifications = getCertifications();
  return (
    <>
      <h1
        style={{
          fontFamily: 'cursive',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Welcome Back, {user.split('@')[0]}
      </h1>
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
      </div>
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
    </>
  );
};

export default SignInLearn;
