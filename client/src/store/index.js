import { compose, combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({});

const middleware = [thunkMiddleware];

const store = createStore(
     rootReducer,
     compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
               window.__REDUX_DEVTOOLS_EXTENSION__()
     )
);

export default store;
