import { combineReducers } from "redux";
import filterReducer from "./filter";
import moviesReducer from "./movies";

export default combineReducers({
    movies: moviesReducer,
    filter: filterReducer,
});
