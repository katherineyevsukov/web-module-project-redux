export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES"
export const ADD_FAVORITES = "ADD_FAVORITES"

export const toggleFavorites = () => {
    return ({type: TOGGLE_FAVORITES});
}
export const addFavorites = (newMovie) => {
    return({type: ADD_FAVORITES, payload: newMovie})
}