interface ExtendedIngredients {
  id: string;
  original: string;
}

interface Steps {
  step: string;
}

interface AnalyzedInstructions {
  steps: Steps[];
}

export default interface SingleRecipeResponse {
  id: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  extendedIngredients: ExtendedIngredients[];
  analyzedInstructions: AnalyzedInstructions[];
  instructions: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
}
