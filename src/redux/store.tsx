import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/users'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddlerware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddlerware));

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddlerware.run(rootSaga);

export default store;