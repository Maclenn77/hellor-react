import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './api_handler';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const greetingReducer = combineReducers({
  greeting: reducer,
});

const store = createStore(
  greetingReducer, composeEnhancers(
    applyMiddleware(logger, thunk),
  ),
);

export default store;
