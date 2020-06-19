//poder conectar proyecto con devTools
//create storage nos crea el Storage
//apply nos ayuda a conectar el proyecto con la extension 

import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import _userReducer from './_userReducer';
import _countryReducer from './_countryReducer';
import thunk from 'redux-thunk';
import _nacionalityReducer from "./_nacionalityReducer";


const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default () => {
    const store = createStore(
        //convierte un objeto cuyos valores son diferentes


        combineReducers({
            user: _userReducer,
            country:_countryReducer,
            nacionality:_nacionalityReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;

}