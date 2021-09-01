import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../redux/reducers/authReducer";
import { notesReducer } from "../redux/reducers/notesReducer";
import { uiReducer } from "../redux/reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk)
    )
    );
