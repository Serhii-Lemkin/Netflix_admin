import axios from 'axios';
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from './MovieActions';

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('/content', {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post('/content/add', movie, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete('/content/delete/' + id, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
