import React from "react";
import style from './recipe.module.css'

//parsing data to component
const Recipe = ({title,calories,image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))} 
            </ol>
            <p><b>Calories : </b>{calories}</p>
            <a className={style.try} href={url}>Try it.!</a>
        </div>
    );
} 