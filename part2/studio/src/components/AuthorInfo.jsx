import recipeData from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
const recipeAuthor = recipeData.map((recipe) => (
  <div key = {recipe.author}>
    {author}
  </div>
))

  return (
    <div>
      {/* {recipeAuthorImage} */}
      {recipeAuthor}
      {/* {recipeWebsite} */}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
