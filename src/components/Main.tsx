import SearchRecipe from "./SearchRecipe";
import Subscribe from "./Subscribe";
import TodaysRecipe from "./TodaysRecipe";

export default function Main() {
  return (
    <main className="Main">
      <SearchRecipe />
      <TodaysRecipe />
      <Subscribe />
    </main>
  );
}
