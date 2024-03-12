import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    let authorLink = "https://houseofnasheats.com/turkish-baklava/";
    let authorPhoto = "https://houseofnasheats.com/wp-content/uploads/2021/09/House-of-Nash-Eats-Profile-Pic-1-360x360.jpg";
    let authorName = "Amy";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Photo of Amy" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>House of Nash Eats: Turkish Baklava</a> 
           </div>
        </div>
     )
    };

    
    class RecipeDescription extends React.Component {
        render() {
        return (
            <div> 
                <div>
                    <h1>Baklava</h1>
                    <p>A buttery, flakey pastry with pistachios and drenched in syrup</p>
                </div>
                <RecipeAuthor />
            </div>
        )
        };
    };

    export default RecipeDescription; 