import React from "react";

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    if (props.rating >= 1 && props.rating <= 5) {
      return <h3>{stars[props.rating - 1]}</h3>;
    } else {
      return null;
    }
  }
  return <GiveRating />;
}

// function RateARecipe(props) {
//   function GiveRating() {
//     return <h3>{stars[props.rating - 1]}</h3>;
//   }

//   return;
//   props.rating >= 1 && props.rating <= 5 ? <GiveRating /> : null;

// }

export default RateARecipe;

//conditional to render stars based on a number provided in App.js
