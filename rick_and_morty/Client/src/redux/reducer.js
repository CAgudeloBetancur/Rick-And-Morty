import { ADD_FAV,REMOVE_FAV,FILTER,ORDER,INITIAL_FAV } from "./actions"

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filtro: ''
}

const reducer = (state = initialState, {type,payload}) => {
  switch(type) {

    case INITIAL_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        filtro: ''
      }
      
    // ! ADD_FAV Versión nueva
    case ADD_FAV:
      return { 
        ...state, 
        myFavorites: payload, 
        allCharacters: payload,
        filtro: '' 
      };
    // ! ADD_FAV Versión anterior
    /* case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload]
      } */
    // ! REMOVE_FAV anterior  
    /* case REMOVE_FAV:
      const quedanFav = state.myFavorites.filter(x => x.id !== payload)
      const quedanAll = state.allCharacters.filter(x => x.id !== payload);
      return {
        ...state,
        myFavorites: quedanFav,
        allCharacters: quedanAll
      } */
    // ! REMOVE_FAV nuevo

    case REMOVE_FAV: 
    
      const filt = payload.filter(fav => fav.gender === state.filtro);

      return { 
        ...state, 
        myFavorites: state.filtro === '' || state.filtro === "all" 
          ? payload
          : filt,
        allCharacters: payload,
        filtro: ''
      };

    case FILTER:
      const filtrados = state.allCharacters.filter(x => x.gender === payload)
      return {
        ...state,
        myFavorites: payload === "all" 
          ? [...state.allCharacters] 
          : filtrados,
        filtro: payload
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