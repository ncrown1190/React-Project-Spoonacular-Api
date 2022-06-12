import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import SingleRecipeResponse from "../models/food-models";
import SingleRecipe from "../models/food-models";
import Recipe from "../models/Recipe";
import { getRecipeById, getRecipesByQuery } from "../services/SpoonApiService";
import "./Details.css";
import RecipeCard from "./RecipeCard";
import { title } from "process";

// interface Props {
//   singleRecipeCard: Recipe;
// }

const Details = () => {
  const [recipe, setRecipe] = useState<SingleRecipeResponse | undefined>();
  const id: string | undefined = useParams().id;
  const { isFav, removeFavorite, addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    getRecipeById(id!).then((response) => {
      setRecipe(response);
      console.log(response);
    });
  }, [id]);
  return (
    <div className="Details">
      <div className="recipe-container">
        <div className="recipe-img-p-container">
          <div className="recipe-image">
            <img src={recipe?.image} alt={recipe?.title} />
          </div>
        </div>
        <div className="title-ingredients-container">
          <div className="favorite-icon-container">
            <p className="details-title">{recipe?.title}</p>
        <div>
        <a href={recipe?.sourceUrl}> Visit Original</a>
        </div>
            {isFav(recipe?.id!) ? (
              <i
                className="fa-solid fa-heart"
                onClick={() => removeFavorite(recipe?.id!)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart"
                onClick={() => addFavorite(recipe!)}
              ></i>
            )}
          </div>
          <div className="recipe-details-container">
            <div className="cuisine-and-dish">
              <p className="cuisine-text">
                {recipe?.cuisines.map((item) => `${item} `)}
              </p>
              <p className="dishType-text">
                {recipe?.dishTypes.map((item) => (
                  <p>{item}</p>
                ))}
              </p>
            </div>
            <p className="diets">
              {recipe?.diets.map((item) => (
                <p>{item}</p>
              ))}
            </p>
            <div className="time-and-servings">
              <p className="ready-in-minutes">
                Total Time: {recipe?.readyInMinutes}min
              </p>
              <p className="servings">Servings: {recipe?.servings}</p>
            </div>
          </div>
          <p className="ingred-size">Ingredients:</p>
          <ul className="ingredients-list">
            {recipe?.extendedIngredients.map((ingredient) => (
              <li>-{ingredient.original}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="instruction-container">
        <p className="instruction-title">Instructions:</p>
        <ol className="instruction-list">
          {recipe?.analyzedInstructions[0]?.steps.map((item) => <li className="instruction-steps">{item.step}</li>)}
        </ol>
      </div>



    </div>
  );
};

export default Details;
