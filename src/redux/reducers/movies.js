import movies from "../../movies";
import {
    DELETE_LAST_MOVIE,
    DELETE_MOVIE,
    UPDATE_LIKE,
    UPDATE_DISLIKE,
} from '../actionTypes';

const initialState = movies;

const moviesReducer = (state = initialState, action) => {
    if (action.type === DELETE_MOVIE || action.type === DELETE_LAST_MOVIE) {
        return state.filter((m) => m.id !== action.payload.id);
    }
    else if ( action.type === UPDATE_LIKE ) {
        return state.map((m) => {
            if (m.id === action.payload.id) {
                return { ...m, likes: m.likes + 1 }
            } else {
                return m; 
            }
        })
    }
    else if ( action.type === UPDATE_DISLIKE ) {
        return state.map((m) => {
            if (m.id === action.payload.id) {
                return { ...m, dislikes: m.dislikes + 1 }
            } else {
                return m; 
            }
        })
    }
    
    return state;
};

export default moviesReducer;
