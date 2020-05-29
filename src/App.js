import React, { useEffect, useState } from "react";
import './App.css';
import About from './About';
import Nav from './Nav';
import Recipe from "./Recipe";
//router components for react
//Route for render out components base on URLs
//Render only Specific URL
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  const APP_ID = "09a2d2a8";
  const APP_KEY = "0dc0e5df3cb462891b94868ef886f3d1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    console.log(APP_ID);

    const response = await fetch(
      "https://api.edamam.com/search?q=chicken&app_id=" +
        APP_ID +
        "&app_key=" +
        APP_KEY +
        ""
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <Router>
    <div className="App">
      <Nav/> 
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipe} />
      </Switch>
    </div>
    </Router>
    </div>
  );
};

export default App;
