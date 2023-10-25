/* 24.10.

   Button Component
*/

import React from 'react';

function Button (props) {
  return (
     <>
      <input 
         type='button'
         value={props.value}
         className={`button ${props.className}`}
         onClick={props.handleClick}
      />
     </>
  )
}

export default Button;