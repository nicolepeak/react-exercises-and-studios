import React from "react";



export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Court of Thorns and Roses by SJM" />
         <img src={book2} alt="A Court of Mist and Fury by SJM" />
         <img src={book3} alt="A Court of Wings and Ruin by SJM" />
      </div>      
   );
}