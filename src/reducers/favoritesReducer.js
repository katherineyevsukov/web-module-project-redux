import { TOGGLE_FAVORITES } from './../actions/favoritesActions'

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
        default:
            return state;
    }
}


export default reducer;