import { combineReducers } from 'redux';
import PortfoliosReducer from './reducer_portfolios';

const rootReducer = combineReducers({
  portfolios: PortfoliosReducer,
});

export default rootReducer;
