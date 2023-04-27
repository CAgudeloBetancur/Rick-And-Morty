import Card from "./Card";
import { useState,useEffect } from "react";
import { filterCards,orderCards,initialFav } from "../redux/actions";
import { useDispatch,connect } from "react-redux";

const Favorites = ({myFavorites,allCharacters,agrupar,filtro}) => {

  const [currentFilter,setCurrentFilter] = useState('');

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  }

  useEffect(() => {
    dispatch(initialFav());
  },[])
  
  useEffect(() => {
    agrupar(0,true);
    // console.log(myFavorites)
    // console.log(filtro)
  },[myFavorites])

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    setCurrentFilter(event.target.value);
  }

  const ocultar = myFavorites.length === 0 || allCharacters.length === 0 
    ? " ocultar"
    : "";

  return (
    <div>
      <div className="selectContainer">
        <div className="filterContainer">
          <h4>Filtros</h4>
          <select onChange={handleOrder} name="selectOrder">
            {/* <option value="" selected disabled>-- Ordenar --</option> */}
            <option value="A" selected>Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select onChange={handleFilter} name="selectFilter">
            {/* <option value="" selected disabled>-- Filtrar --</option> */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="all" selected>All</option>
          </select>
        </div>
      </div>
      <div className={`cards_contenedor${ocultar}`}>
        {
          myFavorites?.map((x,i) => {
                return(
                  <Card
                    key={i}
                    id={x.id}
                    name={x.name}
                    status={x.status}
                    species={x.species}
                    gender={x.gender}
                    origin={x.origin}
                    image={x.image}
                    agrupar={agrupar}
                    filtro={currentFilter}
                  />
                )
              })
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
    filtro: state.filtro
  }
}

export default connect(mapStateToProps,null)(Favorites);