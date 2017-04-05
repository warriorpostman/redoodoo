import React from 'react';
import './Display.css';

// This:
// ...is a "dumb" component
// ...is a "presentational" component
// ...is aided by the DisplayContainer component
const Display = ({ responses }) => {
  console.log('Updated? ',  responses);
  return (
    <div 
      className='response-box'>

      <h5>Responses:</h5>
      {responses.map(item => 
          <div key={item.id}>
          {item.id} = {item.answer.toString()} 
          Is persisted? {item.persisted === undefined? 'no' : item.persisted.toString()} </div>
      )}
    </div>
  );
}

export default Display;
