/* 26.10.

   StarRating Component
*/

import React from 'react';

function StarRating(props) {
   // Stars limit
   let limit = props.limit || 5;

   // Initializing 'rating' variable
   const [rating, setrating] = React.useState(props.rating || 2);

   // 'onClick' Event Handler Function
   function handleClick(event) {
      setrating(+event.target.getAttribute('data'));
   }

   return (
      <>
         <h1>Star Rating App</h1>

         {/* Creating stars having unique ID using Array.map() */}
         {[...new Array(limit).keys()].map((i) => (
            <span
               onClick={handleClick}
               key={i}
               data={i + 1}
               className={i < rating ? 'star rated' : 'star'}
            >
            </span>
         ))}
      </>
   )
}

export default StarRating;


/*
   Try Returning this Snippet..

   return (
      <>
         <h1>Fire-Ice Rating App</h1>

         {[...new Array(limit).keys()].map((i) => (
            <span
               onClick={handleClick}
               key={i}
               data={i + 1}
            >
               {i < rating ? '🔥' : '❄️'}
            </span>
         ))}
      </>
   )
*/