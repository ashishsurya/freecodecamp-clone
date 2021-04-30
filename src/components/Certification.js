import React from 'react';
import { Link } from 'react-router-dom';
import './Certification.css';
import { getCertifications } from './SignOutLearn';

const Certification = ({ id, title, time }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/learn/${id}`}>
      <article
        className='certification'
        style={{
          border: '2px solid #1B1B32',
          margin: '5px',
          width: '100%',
        }}
      >
        <p style={{ color: 'black' }}>
          {title}({time})
        </p>
      </article>
    </Link>
  );
};

export default Certification;
