import { useState } from "react";
import {MdPersonSearch} from "react-icons/md";

export default function SearchBar({fSearch}) {
   
   const [id,setID] = useState('');
   
   const handleChange = (e) => {
      let id = e.target.value;
      setID(id);
   }

   const handleClick = (e) => {
      fSearch(id);
   }

   const handleKeyDown = (e) => {
      if(e.key === "Enter") {
         fSearch(id);
      }
   }

   return (

      <div className="nav_search">
         <div>
            <label htmlFor="buscar"><i><MdPersonSearch/></i></label>
            <input id="buscar" onKeyDown={handleKeyDown} onChange={handleChange} value={id} type='search' placeholder="id..."/>
         </div>

         <button className="nav_btn" onClick={handleClick}>Agregar</button>
      </div>
         
   );
}
