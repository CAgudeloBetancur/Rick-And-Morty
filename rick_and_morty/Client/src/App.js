import elim from './assets/img/eliminar.png';
import axios from 'axios';
import { connect,useDispatch } from "react-redux";
import { useState, useEffect} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { removeFav } from "./redux/actions";
import {MdDeleteForever} from 'react-icons/md'

function App({allCharacters,removeFav}) {
   
   const dispatch = useDispatch();

   const rutaActual = useLocation();
   const [characters,setCharacters] = useState([]);
   const [vaciar,setVaciar] = useState(false);
   const [animClass,setAnimClass] = useState('');

   const navigate = useNavigate()
   const [access,setAccess] = useState(false);
   const EMAIL = 'camiloab97@gmail.com';
   const PASSWORD = 'camilo97b';

   const URL_BASE = 'http://localhost:3001/rickandmorty/character';
   // const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   // const API_KEY = '28d5485db6dd.6bf5b4c90dcebb8cf27c';

   // ! Login anterior
   /* function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   } */

   // ! Nuevo login
   async function login(userData) {

      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      try {
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
         !access && window.alert('Los datos no coinciden');
      } catch (error) {
         console.log(error);
      }

      /* axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      }); */
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function logout() {
      setAccess(false);
   }

   async function onSearch(id) {
         // axios(`${URL_BASE}/${id}?key=${API_KEY}`)

         try {

            const {data} = await axios(`${URL_BASE}/${id}`)

            if (data.name) {
               let control = false;
               for(let x of characters) {
                  control = +x.id === data.id;
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

         } catch (error) {
            window.alert('¡No hay personajes con este ID!');
         }
         

         /* axios(`${URL_BASE}/${id}`)
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
            })  */        
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
         }else {
            setListaBorrar([...listaBorrar,id]);
         }
         return;
      }
      setListaBorrar([]);            
   }

   // if(rutaActual.pathname !== '/home') setListaBorrar([]);
   
   useEffect(() => {
      console.log(`A borrar: ${listaBorrar}`);
   },[listaBorrar])

   let activarBtn = listaBorrar.length > 0 ? ' activeBtn' : '';
   
   const handleBtnElimVariosClick = () => {
      setAnimClass(' animated');
      let seQuedan = [];
      for(let i = 0; i < characters.length; i++) {
         if(!listaBorrar.includes(characters[i].id) ) {
            seQuedan.push(characters[i]);
         }
         setCharacters(seQuedan);
      }
      for(let x of listaBorrar) {
         for(let z of allCharacters) {
            if(z.id === x) removeFav(x)
         }
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
         {rutaActual.pathname !== '/' && <Nav fSearch={onSearch} logout={logout} agrupar={agruparID}/>}
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
            <Route path='/about' element={<About agrupar={agruparID}/>}/>            
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites agrupar={agruparID}/>}/>            
         </Routes>
         
         <button 
            className={`btnDelete${activarBtn}${animClass}`} 
            onClick={handleBtnElimVariosClick}
            onAnimationEnd={elimVarios}
         >
            <i><MdDeleteForever/></i>
         </button>
      
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      allCharacters: state.allCharacters
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

// export default App;
