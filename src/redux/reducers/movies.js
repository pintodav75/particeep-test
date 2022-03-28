import movies from "../../movies";
import {
    DELETE_LAST_MOVIE,
    DELETE_MOVIE,
} from '../actionTypes';

const initialState = movies;

const moviesReducer = (state = initialState, action) => {
    if (action.type === DELETE_MOVIE || action.type === DELETE_LAST_MOVIE) {
        return state.filter((m) => m.id !== action.payload.id);
    }
    
    return state;
};

export default moviesReducer;
