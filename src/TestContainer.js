import React from 'react';
import { connect } from 'react-redux';
import { updateResponses } from './actions/testActions';

let TestContainer = ({ dispatch }) => {
  let handler = function(e) {
    console.log('triger action:', e.target.id, e.target.checked)
    dispatch(updateResponses(e.target.id, e.target.checked))
  };

  return (
    <div className="">
      a<input id='a' type='checkbox' onChange={handler}/>
      b<input id='b' type='checkbox' onChange={handler}/>
      c<input id='c' type='checkbox' onChange={handler}/>
    </div>
  );
}

TestContainer = connect()(TestContainer);

export default TestContainer;
