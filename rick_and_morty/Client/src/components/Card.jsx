import { useState,useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav,removeFav } from "../redux/actions";

const Card = (
   {id,name,status,species,gender,origin,image,onClose,agrupar,addFav,removeFav,myFavorites,allCharacters}
) => {

   const currentPath = useLocation();

   let noFavorites = currentPath.pathname !== "/favorites" ;
   let inDetail = currentPath.pathname === "/detail/:id" ;

   const [cardState, setCardState] = useState(false);
   const [vaciar,setVaciar] = useState(false);
   const [animClass, setAnimClass] = useState('');
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      }else if(!isFav) {
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image})
      }
      
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      // console.log(cardState)
      /* console.log('Favoritos: ')
      console.log(myFavorites);
      console.log('Todos los Favoritos: ')
      console.log(allCharacters); */
   }, [myFavorites,allCharacters]);

   const handleBtnClick = (e) => {
      onClose(id,cardState);
   }
   
   const handleCardClick = () => {
      if(currentPath.pathname === "/home") {
         setCardState(cardState => !cardState);
         setAnimClass(' animated');
         setVaciar(false);
         agrupar(id,vaciar);
      }
   }

   const handleAnimEnd = () => {
      setAnimClass('');
   }

   const handleNavLinkClick = () => {
      setVaciar(true);
      if(noFavorites) {
         agrupar(0,vaciar);
      }
   }

   let toggleClassCheck = cardState ? ' active' : '';

   return (
      <div key={id} className={`card_cont${animClass}`} onAnimationEnd={handleAnimEnd}>
         <div className="card_divBtnClose">
            <button className="btnFavorito" onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            {  
               noFavorites && 
               <button 
                  className="btnClose" 
                  onClick={handleBtnClick}
               >X</button>
            }
         </div>
         <div className={`card${toggleClassCheck}`}>
            <div className="card_divImg" onClick={handleCardClick}>
               <img src={image} alt='' />
            </div>
            <div className="card_Nombre" onClick={handleNavLinkClick}>
               <NavLink className="card_nombreLink" to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </NavLink>
            </div>
            <div className="card_divDescription" onClick={handleCardClick}>
               {/* <h2>id : {id}</h2> */}
               <div className="primerDesc">
                  <h4>Status</h4>
                  <p>{status}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites : state.myFavorites,
      allCharacters: state.allCharacters
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Card);