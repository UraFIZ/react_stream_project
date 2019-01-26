import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import thunk from 'redux-thunk'
import history from './history'
import reducers from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

/*const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const configureStore = preloadedState => (
createStore(
  reducers,
  preloadedState,
  composeEnhancers()
)
) 
const store = configureStore({});
*/

/* eslint-enable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store={store}> 
  <Router history={history}>
  <App />
  </Router>
</Provider> , 
document.getElementById('root'));


serviceWorker.unregister();
