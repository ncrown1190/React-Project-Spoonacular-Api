import axios from "axios";
import SingleRecipeResponse from "../models/food-models";
import RecipeResponse from "../models/RecipeResponse";
import SearchResponse from "../models/SearchResponse";

export function getRandomRecipe(): Promise<RecipeResponse> {
  return axios
    .get(
      "https://api.spoonacular.com/recipes/random?number=4&tags=vegetarian,dessert&apiKey&targetCalories=${calories}"
    )
    .then((response) => response.data);
}

export function getRecipesByQuery(query: string): Promise<SearchResponse> {
  return axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=2&apiKey&includeNutrition=false`
    )
    .then((response) => response.data);
}

export function getRecipeById(id: string): Promise<SingleRecipeResponse> {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: {
        apiKey: "",
        includeNutrition: false,
      },
    })
    .then((response) => response.data);
}
