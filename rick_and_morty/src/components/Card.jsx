import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Card(
   {id,name,status,species,gender,origin,image,onClose,agrupar}
) {

   const [cardState, setCardState] = useState(false);
   const [vaciar,setVaciar] = useState(false);
   const [animClass, setAnimClass] = useState('');

   const handleBtnClick = () => {
      onClose(id,cardState);
   }
   
   const handleCardClick = () => {
      setCardState(cardState => !cardState);
      setAnimClass(' animated');
      setVaciar(false);
      agrupar(id,vaciar);
   }

   const handleAnimEnd = () => {
      setAnimClass('');
   }

   const handleNavLinkClick = () => {
      setVaciar(true);
      agrupar(0,vaciar);
   }

   let toggleClassCheck = cardState ? ' active' : '';

   return (
      <div key={id} className={`card_cont${animClass}`} onAnimationEnd={handleAnimEnd}>
         <div className="card_divBtnClose">
            <button className="btnClose" onClick={handleBtnClick}>X</button>
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
               <div>
                  <h4>Species</h4>
                  <p>{species}</p>
               </div>
               <div>
                  <h4>Gender</h4>
                  <p>{gender}</p>
               </div>
               <div>
                  <h4>Origin</h4>
                  <p>{origin}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
