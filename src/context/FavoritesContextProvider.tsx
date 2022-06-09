import { ReactNode, useState } from "react";
import Recipe from "../models/Recipe";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const addFavorite = (recipe: Recipe): void => {
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFavorite = (id: string): void => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const isFav = (id: string): boolean =>
    favorites.some((recipe) => recipe.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
