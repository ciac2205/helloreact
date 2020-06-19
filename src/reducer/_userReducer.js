
//Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras
// que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesaria


import { userTypes } from "../actions/_userActions";

const initialState={
    name: 'Ejemplo'
}

export default(state = initialState, action ) => {

    switch(action.type){
        case userTypes.updateName :
            return{
                ...state,
                name :action.payload
            }
            default :
            return{...state}

    }

}