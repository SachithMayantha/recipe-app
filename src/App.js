import React from 'react';
import './App.css';
import Nav from './Home';
import About from './About';
import RecipeMain from './RecipeMain';
//router components for react
//Route for render out components base on URLs
//Render only Specific URL
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/> 
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/recipes" component={RecipeMain} />
      </Switch>
    </div>
    </Router>
  ); 
}

const Home=()=>(
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
