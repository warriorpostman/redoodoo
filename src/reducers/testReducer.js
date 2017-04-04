const testReducer = (state={responses:[]}, action) => {
  switch(action.type) {
    case "UPDATE_RESPONSE": {
      console.log('reducing for ', action.payload);
      const cloned = state.responses.map((item) => {return {id: item.id, answer: item.answer}});
      const newResponse = {id: action.payload.id, answer: action.payload.answer};
      cloned.push(newResponse);
      return {
        responses: cloned
      }
    }   
    default: { return state; }
  }
};
export default testReducer;
