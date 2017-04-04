import { createStore } from 'redux';

// import { createLogger } from 'redux-logger';

import reducer from './reducers';

// TODO: revisit middleware
//const middleware = applyMiddleware(createLogger());

export default createStore(reducer);
