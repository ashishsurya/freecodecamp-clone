import React from 'react';
import { useStateValue } from '../StateProvider';
import './Learn';
import SignInLearn from './SignInLearn';
import SignOutLearn from './SignOutLearn';

const Learn = () => {
  const [{ user }, dispatch] = useStateValue();
  user ? <SignInLearn /> : <SignOutLearn />;
};

export default Learn;
