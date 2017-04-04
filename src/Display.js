import React from 'react';

const Display = ({ responses, hello }) => {
  // componentWillReceiveProps(p1, p2) {
  //   console.log(p1, p2

  // },
  return (
    <div id='display-something'>
      show responses: {JSON.stringify(responses)} {responses.length}
      <div> {hello === undefined ? 'no-hello': 'Hello! ' + hello} </div>
      Responses: {responses ? 'exists' : 'is null sadface'}
      {responses.map(item => <div key={item.id + Date.now()}>{item.id} = {item.answer.toString()}</div>)}
    </div>
  );
}

export default Display;
