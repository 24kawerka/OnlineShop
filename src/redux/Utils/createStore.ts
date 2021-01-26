import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { createStore } from "redux";
import { persistStore } from 'redux-persist'
import reducers from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunkMiddleware]
export const store: any = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store)