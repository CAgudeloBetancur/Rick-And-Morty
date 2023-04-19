import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

// Conectar nuestra app con la extensión redux-dev-tools en el navegador
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// El segundo parámetro nos permite hacer peticiones a una API/Servidor
const store = createStore(reducer,composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;

// applyMiddleware, compose y thunkMiddleware son para que funcione la extensión redux-tools en el navegador