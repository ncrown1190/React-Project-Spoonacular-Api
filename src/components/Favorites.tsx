import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <h2>
        <span>YOUR FAVORITE RECIPE</span>
      </h2>
      <ul>
        {favorites.map((favorite) => {
          return <RecipeCard singleRecipeCard={favorite} key={favorite.id} />;
        })}
      </ul>
    </div>
  );
};

export default Favorites;
