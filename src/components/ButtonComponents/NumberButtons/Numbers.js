import React, { useState } from "react";
import { numbers } from '../../../data';

// console.log(numbers);

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  //  export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];


  /* STEP 3 - Use .map() to iterate over your array data and return a button
         component matching the name on the provided file. Pass
         it any props needed by the child component*/
  return (
    <div>
      {numberState.map(number => {
        return (
          <button className='numbers'>
            {number}
          </button>
        )
      })}
    </div>
  );
};
