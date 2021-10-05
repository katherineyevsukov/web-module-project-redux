import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'

const reducer = combineReducers({
    movieState:movieReducer,
    favoritesReducer:favoritesReducer
})

export default reducer;