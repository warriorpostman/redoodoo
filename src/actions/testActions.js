export function fetchResponses(testId) {
  return {
    type: 'FETCH_RESPONSES_DONE',
    payload: {
      responses: [
        {index: 10, response: true},
        {index: 80, response: true},
      ]
    }
  }
}

export function updateResponses(testId, index, answer ) {
  return {
    type: 'UPDATE_RESPONSE_DONE',
    payload: {
      index: index,
      response: answer
    }
  }
}
