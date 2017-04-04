export function updateResponses(id, answer) {
  return {
    type: 'UPDATE_RESPONSE',
    payload: {
      id,
      answer
    }
  }
}
