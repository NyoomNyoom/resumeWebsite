import './App.css';

import {Route, Switch} from 'react-router-dom';

import About from './pages/About';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component ={About} />
    </Switch>
  )
}
