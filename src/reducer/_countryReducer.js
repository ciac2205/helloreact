import {userTypes} from "../actions/_countryActions";

const initialState = {
    country: 'Mexico'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case userTypes.updateCountry :
            return {
                ...state,
                country: action.payload
            }
        default :
            return {...state}

    }

}