import { connect } from 'react-redux';
import Display from './Display';

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
