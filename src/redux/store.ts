import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loadState, saveState} from '../common/utils/localStorage';
import {squareTableReducer} from './squareTableReducer';


export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

const rootReducer = combineReducers(
    {
        squareTablePage: squareTableReducer,
    }
)
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

const persistedState = loadState();
export const store = createStore(
    rootReducer, persistedState, applyMiddleware(thunk)
);
store.subscribe(() => {
    saveState({
        squareTablePage: store.getState().squareTablePage
    });
}); // add Local Storage to project


