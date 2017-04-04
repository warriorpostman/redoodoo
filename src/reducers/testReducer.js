const testReducer = (state={responses:[]}, action) => {
  switch(action.type) {
    case "UPDATE_RESPONSE": {
      console.log('reducing:', action.type, action.payload);
      const newResponse = Object.assign({}, action.payload);
      // replace existing response
      const cloned = state.responses.filter((item) => item.id !== newResponse.id);
      cloned.push(newResponse);
      return {
        responses: cloned
      }
    }   
    default: { return state; }
  }
};
export default testReducer;
