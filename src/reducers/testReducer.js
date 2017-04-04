import { createStore, combineReducers, applyMiddleware } from 'redux';

const userReducer = (state={}, action) => {

  switch(action.type) {
    case "FETCH_RESPONSES_DONE": {
      state = {...state, name: action.payload};
      break;
    }   
    case "UPDATE_RESPONSE_DONE": {
      state = {...state, age: action.payload};
      break;
    }   
    default: { return state; }

  }
  return state;
};
