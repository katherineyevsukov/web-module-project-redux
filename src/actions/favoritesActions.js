export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES"
export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const toggleFavorites = () => {
    return ({type: TOGGLE_FAVORITES});
}
export const addFavorites = (newMovie) => {
    return({type: ADD_FAVORITES, payload: newMovie})
}

export const removeFavorite = (id) => {
    return({type: REMOVE_FAVORITE, payload: id})
}