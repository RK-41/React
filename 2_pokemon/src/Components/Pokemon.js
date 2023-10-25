/* 25.10.

   Pokemon Component

*/

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

function Pokemon() {

   // Initializing 'id', 'name' and 'effect' using 'useState()'
   const [id, setid] = useState('_');
   const [name, setname] = useState('NA');
   const [effect, seteffect] = useState();

   // Using 'useEffect()' to handle api request dynamically
   useEffect(() => {

      async function getData() {
         const res = await axios.get(`https://pokeapi.co/api/v2/ability/${id}`);

         // console.log(res);

         setname(res.data.name);
         seteffect(res.data.effect_entries[1]['effect']);

      }

      getData();
   })

   // 'onChange' Event Handler
   function handleChange(event) {
      setid(event.target.value);
   }

   return (
      <div className="Pokemon">
         <h1>Get Pokemon</h1>
         <CatchingPokemonIcon fontSize='large' />

         <h2>Select a Pokemon ID:

            <select
               id=''
               name=''
               value={id}
               onChange={handleChange}
            >
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
               <option value={4}>4</option>
               <option value={5}>5</option>
               <option value={6}>6</option>
               <option value={7}>7</option>
               <option value={8}>8</option>
               <option value={9}>9</option>
               <option value={10}>10</option>
               <option value={25}>25</option>
            </select>

         </h2>
         <h2>You've chosen <span>{id}</span></h2>
         <h2>Pokemon's name is <span>{name}</span></h2>
         <h3>{effect}</h3>

      </div>
   );
}

export default Pokemon;