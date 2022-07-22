import { legacy_createStore as createStore } from "redux";
import { rootReducers } from "./action/reducers";

export const store = createStore(rootReducers);
