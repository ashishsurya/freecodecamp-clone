import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './Register';

function App() {
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
