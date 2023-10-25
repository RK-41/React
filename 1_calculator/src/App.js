/* eslint-disable no-eval */
/* 24.10.

   Calculator App
*/

import React, { useState } from 'react';
import Button from './Components/Button';
import './App.css';


function App() {
   const [result, updateRes] = useState('');

   const clickHandler = (event) => {
      updateRes(result.concat(event.target.value));
   }

   const calculate = () => {
      updateRes(eval(result.toString()));
   }

   const clear = () => {
      updateRes('');
   }

   return (
      <>
         <div className='main'>
            <div className='calculator'>
               <h1>Calculator</h1>

               <input type='text' placeholder='0' id='answer' value={result} />

               <Button value={1} handleClick={clickHandler} />
               <Button value={2} handleClick={clickHandler} />
               <Button value={3} handleClick={clickHandler} />
               <Button value={4} handleClick={clickHandler} />
               <Button value={5} handleClick={clickHandler} />
               <Button value={6} handleClick={clickHandler} />
               <Button value={7} handleClick={clickHandler} />
               <Button value={8} handleClick={clickHandler} />
               <Button value={9} handleClick={clickHandler} />
               <Button value={0} handleClick={clickHandler} />

               <Button value={'%'} handleClick={clickHandler} />
               <Button value={'/'} handleClick={clickHandler} />
               <Button value={'*'} handleClick={clickHandler} />
               <Button value={'+'} handleClick={clickHandler} />
               <Button value={'-'} handleClick={clickHandler} />
               <Button value={'.'} handleClick={clickHandler} />

               <Button value={'Clear'} handleClick={clear} className={'bottom'} />
               <Button value={'='} handleClick={calculate} className={'bottom'} />
            </div>
         </div>
      </>
   )
}

export default App;