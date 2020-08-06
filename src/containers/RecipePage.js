import React, { useState, useEffect } from "react";
import CocktailLogo from "./Logo";
import Header from "../components/MainPage/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import Navbar from "./Navbar";
import Footer from "./../components/MainPage/Footer";
import Ingredients from "./Ingredients";
import CocktailImg from "./../components/RecipePage/CocktailImg";
import CocktailName from "./../components/RecipePage/CocktailName";
import CocktailInstructions from "./../components/RecipePage/CocktailInstructions";
import RecipePageStyle from "../components/RecipePage/RecipePageStyle";

function RecipePage(props) {
  const [dataRecipe, setDataRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDetailedRecipe = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.match.params.cocktailName}`
      )
      .then((response) => response.data)
      .then((data) => {
        setDataRecipe(data.drinks[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getDetailedRecipe();
  }, []);

  const getIngredients = (dataRecipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (dataRecipe["strIngredient" + i] != null) {
        ingredients.push({
          name: dataRecipe["strIngredient" + i],
          measure: dataRecipe["strMeasure" + i],
          id: i,
        });
      }
    }
    return ingredients;
  };

  let listOfIngredients = [];
  if (dataRecipe !== null) {
    listOfIngredients = getIngredients(dataRecipe).map((item) => {
      return (
        <Ingredients
          item={item}
          key={item.id}
          addIngredient={props.addIngredient}
        />
      );
    });
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <RecipePageStyle>
      <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <h1>ShakeIt</h1>
        <LogOut />
      </Header>
      <CocktailName>{dataRecipe.strDrink}</CocktailName>
      <CocktailImg src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
      <CocktailInstructions>{dataRecipe.strInstructions}</CocktailInstructions>
      <ul>{listOfIngredients}</ul>

      <Footer>
        <Navbar />
      </Footer>
    </RecipePageStyle>
  );
}

export default RecipePage;
