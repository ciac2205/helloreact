export const userTypes = {
    //las actions son enviadas a un dispatcher
    updateNacionality : "user/UPDATE_NACIONALITY"
}
export const updateNacionaity = (nacionality = '') => {

    return (dispatch,getState) =>
    {
//el dispatch  no es mas que un mediador  entre la store
        // y las acciones
        dispatch({
            type: userTypes.updateNacionality,
            payload: nacionality

        })
    }
}