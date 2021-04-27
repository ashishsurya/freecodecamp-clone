import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';

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
