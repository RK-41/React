/* 26.10.

   App Component
*/

import React from 'react';
import StarRating from './Components/StarRating';
import './style.css';

function App() {
   return (
      <>
         <StarRating limit={5} rating={0}/>
      </>
   )
}

export default App;