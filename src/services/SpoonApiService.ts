import axios from "axios";
import Params from "../models/Params";
import SingleRecipeResponse from "../models/food-models";
import RecipeResponse from "../models/RecipeResponse";
import SearchResponse from "../models/SearchResponse";

export function getRandomRecipe(): Promise<RecipeResponse> {
  return axios
    .get(
      "https://api.spoonacular.com/recipes/random?number=3&tags=&apiKey=0af608f360ec471f896ac76414b99cb4"
    )
    .then((response) => response.data);
}

export function getRecipesByQuery(params: Params): Promise<SearchResponse> {
  return axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?&number=3&apiKey=0af608f360ec471f896ac76414b99cb4`, {params}
    )
    .then((response) => response.data);
}

export function getRecipeById(id: string): Promise<SingleRecipeResponse> {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: {
        apiKey: "0af608f360ec471f896ac76414b99cb4",
        includeNutrition: false,
      },
    })
    .then((response) => response.data);
}

export function getRecipeByURL(url: string): Promise<SingleRecipeResponse> {
  return axios
    .get(`https://api.spoonacular.com/recipes/extract`, {
      params: {
        apiKey: "0af608f360ec471f896ac76414b99cb4",
        url: url,
      },
    })
    .then((response) => response.data);
}