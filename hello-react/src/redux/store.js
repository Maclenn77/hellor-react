import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './api_handler'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const greeting_Reducer = combineReducers({
 greeting: reducer,
});

const store = createStore(
greeting_Reducer, composeEnhancers(
  applyMiddleware(logger, thunk),
),
);

export default store;