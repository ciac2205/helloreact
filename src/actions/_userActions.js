// Esta se encarga de indicar  una intención de realizar algo

//Los actions  son cargas de información que envían datos desde su aplicación a su store.
export const userTypes = {
    //las actions son enviadas a un dispatcher
    updateName : "user/UPDATE_NAME"
}
export const updateName = (name = '') => {
    
    return (dispatch,getState) => 
    {
//el dispatch  no es mas que un mediador  entre la store
        // y las acciones
        dispatch({
            type: userTypes.updateName,
            payload: name

        })
    }
}