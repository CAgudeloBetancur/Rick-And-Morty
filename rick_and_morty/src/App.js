import elim from './assets/img/eliminar.png';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App() {
   
   const rutaActual = useLocation();
   const [characters,setCharacters] = useState([]);
   const [vaciar,setVaciar] = useState(false);
   const [animClass,setAnimClass] = useState('');

   const navigate = useNavigate()
   const [access,setAccess] = useState(false);
   const EMAIL = 'camiloab97@gmail.com';
   const PASSWORD = 'camilo97b';

   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = '28d5485db6dd.6bf5b4c90dcebb8cf27c';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function logout() {
      setAccess(false);
   }

   function onSearch(id) {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
            .then(({ data }) => {
               if (data.name) {
                  let control = false;
                  for(let x of characters) {
                     control = x.id === data.id;
                     if(control) break;
                  }
                  if(!control) {
                     setCharacters((oldChars) => [...oldChars, data]);
                  } else {
                  window.alert(`${data.name} ya está aquí`);
                  }
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            }).catch(function(error){
               window.alert('¡No hay personajes con este ID!');
            })         
   }

   function onClose(id,cardState) {
      setVaciar(false);
      const newChar = characters.filter(x => {
         return x.id !== id;         
      });
      setCharacters(newChar);
      if(cardState) agruparID(id,vaciar);
   }

   let [listaBorrar,setListaBorrar] = useState([]);

   function agruparID(id,vac) {
      if(!vac && parseInt(id) !== 0) {
         setListaBorrar([])
         let listaBorrarAux;
         if(listaBorrar.includes(id)) {
            listaBorrarAux = listaBorrar.filter(x => x !== id);
            setListaBorrar(listaBorrarAux);
            console.log('entramos');
         }else {
            setListaBorrar([...listaBorrar,id]);
         }
         return;
      }
      setListaBorrar([]);            
   }
   
   useEffect(() => {
      console.log(`A borrar: ${listaBorrar}`);
   },[listaBorrar])

   let activarBtn = listaBorrar.length > 0 ? ' activeBtn' : '';
   
   const handleBtnElimVariosClick = () => {
      setAnimClass(' animated');
      const seQuedan = [];
      for(let i = 0; i < characters.length; i++) {
         if(!listaBorrar.includes(characters[i].id) ) {
            seQuedan.push(characters[i]);
         }
         setCharacters(seQuedan);
      }
   }
   
   function elimVarios(e) {
      if(e.animationName === "loginBtnAnimation") {
         setListaBorrar([]);
         setAnimClass('');
      }
   }

   let ocultarApp = characters.length === 0 ? ' oculto' : '';
   
   return (
      <div className='App'>
         {rutaActual.pathname !== '/' && <Nav fSearch={onSearch} logout={logout}/>}
         <div className='appContenedor'></div>
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path='/home' element={
               <Cards 
                  classOcultar={ocultarApp}
                  characters={characters} 
                  onClose={onClose}
                  agrupar={agruparID}
               />}
            />
            <Route path='/about' element={<About/>}/>            
            <Route path='/detail/:id' element={<Detail/>}/>            
         </Routes>
            <button 
               className={`btnDelete${activarBtn}${animClass}`} 
               onClick={handleBtnElimVariosClick}
               onAnimationEnd={elimVarios}
            >
               <img src={elim} alt=""></img>
            </button>
      </div>
   );
}

export default App;
