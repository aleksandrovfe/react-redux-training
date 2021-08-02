import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./reducers/userReducer";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {appReducer} from "./reducers/appReducer";
import {sagaWatcher} from "./saga";

const initialState = {}
const saga = createSagaMiddleware()

const reducers = combineReducers({
    users: usersReducer,
    app: appReducer,
})

export const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, saga)
)

saga.run(sagaWatcher)
