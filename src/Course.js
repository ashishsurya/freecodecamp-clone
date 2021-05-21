import React, { useEffect, useState } from 'react';
import { getCertifications } from './components/SignOutLearn';
import { Link, useParams } from 'react-router-dom';
import Header from './components/Header';

const Course = () => {
  console.log(useParams());
  const [name, setName] = useState('Course Name');
  const { id } = useParams();
  useEffect(() => {
    const course = getCertifications().find(
      (certification) => certification.id === id
    );
    setName(course.title);
  }, []);
  return (
    <>
      <Header headerRoute='/learn' />
      <div>{name}</div>
    </>
  );
};

export default Course;
