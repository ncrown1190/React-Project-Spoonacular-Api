import axios from "axios";
import Params from "../models/Params";
import SingleRecipeResponse from "../models/food-models";
import RecipeResponse from "../models/RecipeResponse";
import SearchResponse from "../models/SearchResponse";

export function getRandomRecipe(): Promise<RecipeResponse> {
  return axios
    .get(
      "https://api.spoonacular.com/recipes/random?number=3&tags=&apiKey=4f5c5e98e5bd421e88c8e1b82129fa3e"
    )
    .then((response) => response.data);
}

export function getRecipesByQuery(params: Params): Promise<SearchResponse> {
  return axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?&number=3&apiKey=4f5c5e98e5bd421e88c8e1b82129fa3e`, {params}
    )
    .then((response) => response.data);
}

export function getRecipeById(id: string): Promise<SingleRecipeResponse> {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: {
        apiKey: "4f5c5e98e5bd421e88c8e1b82129fa3e",
        includeNutrition: false,
      },
    })
    .then((response) => response.data);
}

export function getRecipeByURL(url: string): Promise<SingleRecipeResponse> {
  return axios
    .get(`https://api.spoonacular.com/recipes/extract`, {
      params: {
        apiKey: "4f5c5e98e5bd421e88c8e1b82129fa3e",
        url: url,
      },
    })
    .then((response) => response.data);
}