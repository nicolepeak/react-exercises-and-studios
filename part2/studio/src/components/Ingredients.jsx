import recipeData from "./recipe.json";

function IngredientList() {
  const ingredients = recipeData.map((recipe) => (
    <div>
    <h3>Ingredients</h3>
    <ol>
      {recipe.ingredients.map((ingredient, index) => (
      <li key = {index}>{ingredient}</li>)

      )}
    </ol>
    </div>
  ))

   return ingredients;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 