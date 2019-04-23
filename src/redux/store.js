import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const middleWare = [];
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true,
  });
  middleWare.push(logger);
}
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(
  reducer,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(...middleWare),
);
export default store;
