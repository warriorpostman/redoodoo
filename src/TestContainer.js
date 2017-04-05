import React from 'react';
import { connect } from 'react-redux';
import { updateResponses, updateServer } from './actions/testActions';

// THIS IS:
// * A "smart" component
// * A "container" component
let TestContainer = ({ dispatch }) => {
  let handler = function(e) {
    console.log('triggering action:', e.target.id, e.target.checked)
    dispatch(updateResponses(e.target.id, e.target.checked))
    dispatch(updateServer(e.target.id, e.target.checked))
  };

  return (
    <ul className="">
      <li>
        <span>a</span><input id='a' type='checkbox' onChange={handler}/>
      </li>
      <li>
        <span>b</span><input id='b' type='checkbox' onChange={handler}/>
      </li>
      <li>
        <span>c</span><input id='c' type='checkbox' onChange={handler}/>
      </li>
    </ul>
  );
}

TestContainer = connect()(TestContainer);

export default TestContainer;
