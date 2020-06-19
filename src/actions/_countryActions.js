export const userTypes = {
    updateCountry: "user/UPDATE_COUNTRY"
}
export const updateCountry = (country = '') => {

    return (dispatch, getState) => {

        dispatch({
            type: userTypes.updateCountry,
            payload: country

        })
    }
}