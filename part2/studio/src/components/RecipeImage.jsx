import recipeData from "./recipe.json";

function RecipeImage() {
  const recipeImg = recipeData.map((recipe) => (
    <img src={recipe.recipeImage} />
  ))
   return recipeImg;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 