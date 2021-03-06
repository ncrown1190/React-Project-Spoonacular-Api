import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/search1.svg";
import Params from "../models/Params";
import SearchResponse from "../models/SearchResponse";
import { getRecipesByQuery } from "../services/SpoonApiService";
import RecipeCard from "./RecipeCard";
import "./SearchRecipe.css";
import SingleRecipeResponse from "../models/food-models";

export default function SearchRecipe() {
  const [recipe, setRecipe] = useState<SingleRecipeResponse | undefined>();
  const [query, setQuery] = useState("");
  const [type, setMeal] = useState("");
  const [diet, setDiet] = useState("");
  const [searchRecipe, setSearchRecipe] = useState<SearchResponse>();

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const params: Params = {};
    if (query) {
      params.query = query;
    }
    if (type) {
      params.type = type;
    }
    if (diet) {
      params.diet = diet;
    }
    navigate(`/recipes/complexSearch?${new URLSearchParams({ ...params })}`);
    // getRecipesByQuery(query).then((response) => console.log(response)); // save it to state and then put it down to JSX mapping
    getRecipesByQuery(params).then((response) => setSearchRecipe(response)); // save it to state and then put it down to JSX mapping
    setQuery("");
    setMeal("");
    setDiet("");
  };
  return (
    <div>
    <form className="SearchBox" onSubmit={submitHandler}>
      <div className="searchBar-icon">
        <img
          src={searchIcon}
          alt="search icon"
          onClick={submitHandler}
          className="searchIcon"
        />
        <input
          className="SearchBar"
          placeholder="Search Recipes"
          name="SearchBar"
          value={query}
          id="SearchBar"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
        <div className="drop-down-container">
          <div className="meal-type-container">
            <select
              className="mealType"
              name="meals"
              onChange={(e) => setMeal(e.target.value)}
              value={type}
            >
              <option value="">Dish Types</option>
              <option value="lunch">Lunch</option>
              <option value="mainCourse">Main Course</option>
              <option value="mainDish">Main Dish</option>
              <option value="dinner">Dinner</option>
            </select>

            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="diet-container">
            <select
              className="diet"
              name="diet"
              id="diet"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            >
              <option value="">Dietary Preference</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="dairyFree">Dairy Free</option>
              <option value="vegan">Vegan</option>
              <option value="glutenFree">Gluten Free</option>
              <option value="keto">Keto</option>
              <option value="nutFree">Nut Free</option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          {/* <div>
          <input
            className="calories"
            type="number"
            placeholder="Calories"
            // onChange={handleChange}
            name="calories"
            value=""
            id="calories"
          ></input>
        </div> */}
        </div>
      </form>
      <div>
        <div className="searchResults" onSubmit={submitHandler}>
          {searchRecipe?.results.map((recipe, index) => (
            // <img key={index} src={recipe.image} alt={recipe.title} />
            <RecipeCard key={recipe.id} singleRecipeCard={recipe} />
          ))}
        </div>
        <div className="title-ingredients-container">
          <div className="favorite-icon-container">
            <p className="details-title">{recipe?.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
