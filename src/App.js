import React, {useState,useEffect} from 'react';
import './App.css';

function App() {

  //Authentification
  const APP_ID = "21a1ba30";
  const APP_KEY = "e63e2d27d9fd6290ad5d6cd717d72f8a"; 

  const [recipes, setRecipes ] = useState([]); 

  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-form" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
