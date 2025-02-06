import { createStore } from "redux";
import counterReducer from "./reduxPractice/reducer";

const store = createStore(counterReducer);

export default store;
