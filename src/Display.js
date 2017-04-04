import React from 'react';
import './Display.css';

// This:
// ...is a "dumb" component
// ...is a "presentational" component
// ...is aided by the DisplayContainer component
const Display = ({ responses, hello }) => {
  return (
    <div 
      className='response-box'>

      <h5>Responses:</h5>
      {responses.map(item => 
          <div key={item.id}>{item.id} = {item.answer.toString()}</div>
      )}
    </div>
  );
}

export default Display;
