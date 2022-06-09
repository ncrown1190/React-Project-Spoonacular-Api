import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Params from "../models/Params";
// import QueryStringParams from "../models/QueryStringParamas";
import Recipe from "../models/Recipe";
import { getRandomRecipe } from "../services/SpoonApiService";
import RecipeCard from "./RecipeCard";
import "./TodaysRecipe.css";

const TodaysRecipe = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm: string | null = searchParams.get("query");
  const mealType: string | null = searchParams.get("type");
  const diet: string | null = searchParams.get("diet");

  useEffect(() => {
    if (searchTerm || mealType || diet) {
      const params: Params = {
        ...(searchTerm ? { query: searchTerm! } : {}),
        ...(mealType ? { type: mealType! } : {}),
        ...(diet ? { diet: diet! } : {}),
      };
      // console.log(params);

      getRandomRecipe().then((response) => {
        setRecipes(response.recipes);
        console.log(response.recipes);
      });
    }
  }, [searchTerm, mealType, diet]);

  return (
    <div className="TodaysBox">
      <h2>
        {/* <h2 className={`${searchTerm || mealType || diet ? "hide" : ""} `}> */}
        <span>TODAY'S RECIPEASE</span>
      </h2>

      <ul>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipeCard={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default TodaysRecipe;
