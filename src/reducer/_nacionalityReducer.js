import {userTypes} from "../actions/_nacionalityActions";

const initialState = {
    nacionality : 'Mexicana'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case userTypes.updateNacionality :
            return {
                ...state,
                nacionality: action.payload
            }
        default :
            return {...state}

    }

}