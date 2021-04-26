import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Route exact={true} path='/'>
        <Home />
      </Route>
      <Route path='/learn'></Route>
    </Router>
  );
}
export default App;
