import React, {useState,useEffect,Component} from 'react';
import Recipe from './Recipe';


class RecipeMain extends Component {

    render() {
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
    },[query]);
  
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
    }
  
    const getSearch = e => {
      //stop the page Refresh
      e.preventDefault();
      //Search data after the click search button 
      setQuery(search);
      //Clean search box after display result
      setSearch('');
    }
  
    return (
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
        {recipes.map(recipe =>(
          //taken data from state, pass to props
          <RecipeMain
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
          />
         ))}
         </div>
         <footer><center><p><b>Sachith Mayantha Fernando</b> - Sabaragamuwa University of Sri Lanka</p></center></footer><br/>
      </div>
    );}
        }
export default RecipeMain;
