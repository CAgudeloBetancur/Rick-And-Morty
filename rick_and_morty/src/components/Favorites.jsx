import Card from "./Card";
import { useState,useEffect } from "react";
import { filterCards,orderCards } from "../redux/actions";
import { useDispatch,connect } from "react-redux";

const Favorites = ({myFavorites,allCharacters,agrupar}) => {

  const [aux,setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    setAux(true);
    dispatch(orderCards(event.target.value));
  }
  
  useEffect(() => {
    agrupar(0,true);
  },[])

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
    console.log(myFavorites);
  }

  return (
    <div style={{position: 'relative'}}>
      <select onChange={handleOrder} name="selectOrder">
        <option value="" selected>-- Ordenar --</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} name="selectFilter">
        <option value="" selected>-- Filtrar --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="all">All</option>
      </select>
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
            />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters
  }
}

export default connect(mapStateToProps,null)(Favorites);