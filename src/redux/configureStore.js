import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';  // Handles async calls

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState, // Useful for SSR
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) // Warns if state is mutated
  );
}