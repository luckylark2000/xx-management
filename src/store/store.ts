import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import info from "./module/info/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import global from "./module/global/reducer";

const reducerAll = combineReducers({
    global,
    info
})

const store = legacy_createStore(reducerAll, composeWithDevTools(applyMiddleware(thunk)));
export default store;