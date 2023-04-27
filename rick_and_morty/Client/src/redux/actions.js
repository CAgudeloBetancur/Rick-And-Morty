import axios from "axios";

export const INITIAL_FAV = "INITIAL_FAV";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// ! initialFav

export const initialFav = () => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint);
      return dispatch({
        type: INITIAL_FAV,
        payload: data
      })
    } catch(err){
      console.log(err.messsage);
    }
  }
}

// ! addFav anterior
/* export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character
  }
} */

// ! addFav nuevo
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const {data} = await axios.post(endpoint, character)
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
    /* const {data} = axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    }); */
  }
}

// ! removeFav anterior
/* export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}; */

// ! removeFav nuevo
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data
      });
    } catch (error) {
      console.log(error.messsage);
    }
    /* axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data
      });
    }); */
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
