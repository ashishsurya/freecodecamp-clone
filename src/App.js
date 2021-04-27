import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
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
  }, []);
  return (
    <Router>
      <Route exact={true} path='/'>
        <Header />
        <Home />
      </Route>
      <Route path='/learn'>
        <Header />
      </Route>
      <Route path='/signin'>
        <Register />
      </Route>
    </Router>
  );
}
export default App;
