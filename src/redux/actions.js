import {
  UPDATE_FILTER,
  DELETE_MOVIE,
  DELETE_LAST_MOVIE,
  SET_PAGE,
  UPDATE_LIKE,
} from "./actionTypes";

export const updateFilter = category => ({
    type: UPDATE_FILTER,
    payload: {
      category
    }
});

export const deleteMovie = id => ({
  type: DELETE_MOVIE,
  payload: {
    id
  }
});

export const deleteLastMovie = id => ({
  type: DELETE_LAST_MOVIE,
  payload: {
    id
  }
});


export const setPage = page => ({
  type: SET_PAGE,
  payload: {
    page
  }
});

export const updateLike = id => ({
  type: UPDATE_LIKE,
  payload: {
    id
  }
});