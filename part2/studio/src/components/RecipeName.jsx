import recipeData from "./recipe.json";

function RecipeName() {
  const recipeName = recipeData.map((recipe) => (
 <h1>
  {recipe.name}
 </h1>
  ));
  return recipeName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header