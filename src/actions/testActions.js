export const UPDATE_RESPONSE = 'UPDATE_RESPONSE';
export const UPDATE_SERVER = 'UPDATE_SERVER';
export const UPDATE_SERVER_SUCCESS = 'UPDATE_SERVER_SUCCESS';

export function updateResponses(id, answer) {
  return {
    type: UPDATE_RESPONSE,
    payload: {
      id,
      answer
    }
  }
}

export function updateServerSuccess(id, answer) {
  return {
    type: UPDATE_SERVER_SUCCESS,
    payload: {id, answer, persisted: true}
  }
}

export function updateServer(id, answer) {
  return function(dispatch) {
    console.log('beginning...');
    dispatch({
      type: UPDATE_SERVER,
      payload: {
        id,
        answer
      }
    });
    return setTimeout(function() {
      console.log('...and done');
      dispatch(updateServerSuccess(id, answer, true));
    }, 2500);
  }
}
