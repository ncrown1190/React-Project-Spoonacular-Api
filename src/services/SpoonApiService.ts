import axios from "axios";
import SingleRecipeResponse from "../models/food-models";
import RecipeResponse from "../models/RecipeResponse";
import SearchResponse from "../models/SearchResponse";

export function getRandomRecipe(): Promise<RecipeResponse> {
  return axios
    .get(
      "https://api.spoonacular.com/recipes/random?number=3&tags=&apiKey=1cbba6ef40bb4017ace4ef78a038ad05"
    )
    .then((response) => response.data);
}

export function getRecipesByQuery(query: string): Promise<SearchResponse> {
  return axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=2&apiKey=1cbba6ef40bb4017ace4ef78a038ad05&includeNutrition=false`
    )
    .then((response) => response.data);
}

export function getRecipeById(id: string): Promise<SingleRecipeResponse> {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: {
        apiKey: "54cc4cb4fb0146819b9958a53e62d454",
        includeNutrition: false,
      },
    })
    .then((response) => response.data);
}
