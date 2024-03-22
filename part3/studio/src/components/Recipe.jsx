import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.spendwithpennies.com/author/holly/";
   let authorPhoto = "https://www.spendwithpennies.com/wp-content/uploads/2015/02/SWP-Holly-300x300.jpg";
   let authorName = "Holly Nilsson";

   return (
      <div>
         <img src={authorPhoto} alt = "Photo of Holly Nilsson" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Lasagna Noodles", "Ground Beef", "Ricotta Cheese", "Pasta Sauce", "Mozzarella Cheese"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.spendwithpennies.com/wp-content/uploads/2020/05/Lasagna-SpendWithPennies-22-1024x1536.jpeg" alt="Photo of Lasagna" className="imageUpdates" style={{width: "200px", objectFit: "contain", borderRadius: "25%"}}/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
