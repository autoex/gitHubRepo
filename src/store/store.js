import {repositoryReducer} from "./reducers/repository-reducer";
import {combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    repositoryPage: repositoryReducer
});

export const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thunk)));


window.store = store.getState();