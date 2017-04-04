import { connect } from 'react-redux';
import Display from './Display';

// This:
// ...is a "smart" component
// ...is a "container" component
// ...wrapper for the Display component
const mapStateToProps = (state) => {
  console.log('map state to props -> responses:', state.testReducer.responses);
  return {
    responses: state.testReducer.responses
  }
}

const DisplayContainer = connect(
      mapStateToProps 
      // mapDispatchToProps
    )(Display);

export default DisplayContainer;
