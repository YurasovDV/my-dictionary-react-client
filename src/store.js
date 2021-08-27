import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware];

function configureStore() {
  return createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(...middlewares))
  );
}

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
