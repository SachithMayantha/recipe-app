import React, {useState,useEffect} from 'react';
import Recipe from "./Recipe";
import './App.css';

function App() {

  //Authentification
  const APP_ID = "21a1ba30";
  const APP_KEY = "e63e2d27d9fd6290ad5d6cd717d72f8a"; 

  const [recipes, setRecipes ] = useState([]);
  const [search, setSearch] = useState(""); 
  //Set query to stop searching when typing
  const [query, setQuery] = useState('chicken');

  //useEffect for to do something after render
  useEffect(() => {
    getRecipes();
  },[search]);

  //fetch the data
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      //can use await keyword in async function
      //await for promise to be resolve or rejected
      const data = await response.json();
      setRecipes(data.hits); 
      console.log(data.hits); 
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    //stop the page Refresh
    e.preventDefault();
    //Search data after the click search button 
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-form" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        //taken data from state, pass to props
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
       ))}
    </div>
  );
}

export default App;
