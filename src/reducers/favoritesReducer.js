import { TOGGLE_FAVORITES, ADD_FAVORITES } from './../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}
const reducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites 
            }
        case ADD_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites, action.payload] 
            } 
        default:
            return state;
    }
}


export default reducer;