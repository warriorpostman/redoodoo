import { 
  UPDATE_RESPONSE, 
  UPDATE_SERVER, 
  UPDATE_SERVER_SUCCESS 
} from '../actions/testActions';

const testReducer = (state={responses:[]}, action) => {
  switch(action.type) {
    case UPDATE_RESPONSE: {
      console.log('reducing:', action.type, action.payload);
      const newResponse = Object.assign({}, action.payload);
      // replace existing response
      const filtered = state.responses.filter((item) => item.id !== newResponse.id);
      filtered.push(newResponse);
      return {
        responses: filtered
      }
    }   
    case UPDATE_SERVER: {
      console.log('reducing:', action.type, action.payload);
      return state;
    }
    case UPDATE_SERVER_SUCCESS: {
      console.log('reducing:', action.type, action.payload, state.responses);
      var item = action.payload;
      // erggh, maybe we should use immutable library
      var responses = state.responses.concat([]); 
      return { 
        responses: responses.map((value) => (value.id === item.id) ? item : value)
      };
    }   
    default: { 
      return state; 
    }
  }
};
export default testReducer;
