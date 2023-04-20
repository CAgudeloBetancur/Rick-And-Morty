import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./actions"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, {type,payload}) => {
  switch(type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload]
      }
    case REMOVE_FAV:
      const quedanFav = state.myFavorites.filter(x => x.id !== payload)
      const quedanAll = state.allCharacters.filter(x => x.id !== payload);
      return {
        ...state,
        myFavorites: quedanFav,
        allCharacters: quedanAll
      }
    case FILTER:
      const filtrados = state.allCharacters.filter(x => x.gender === payload)
      return {
        ...state,
        myFavorites: payload === "all" ? [...state.allCharacters] : filtrados
      }
    case ORDER:
      let ordenados = []
      if(payload==="A") ordenados = [...state.allCharacters].sort((a,b) => a.id-b.id);
      if(payload==="D") ordenados = [...state.allCharacters].sort((a,b) => b.id-a.id);
      return {
        ...state,
        myFavorites: ordenados
      }        
    default:
      return {...state}
  }
}

export default reducer;