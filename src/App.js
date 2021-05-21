import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import SignInLearn from './components/SignInLearn';
import SignOutLearn from './components/SignOutLearn';
import Course from './Course';

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          username: authUser.email,
        });
      } else {
        dispatch({ type: 'SET_USER', username: null });
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Router>
      <Route exact={true} path='/'>
        <Header headerRoute='/learn' />
        <Home />
      </Route>
      <Route exact path='/learn'>
        <Header headerRoute='/' />
        {user ? <SignInLearn /> : <SignOutLearn />}
      </Route>
      <Route path='/signin'>
        <Register />
      </Route>
      <Route path='/learn/:id'>
        <Course />
      </Route>
    </Router>
  );
}
export default App;
