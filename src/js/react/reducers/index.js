import {combineReducers} from 'redux';

// My Own Reducers
import FoodBrandsReducer from './reducer-food-brands';
import ActiveBrand from './reducer-active-brand';
import ActiveCategory from './reducer-active-category';

// Combining all data in one big Object
const allReducers = combineReducers({
    foodBrands: FoodBrandsReducer,
    activeBrand: ActiveBrand,
    activeCategory: ActiveCategory
});

export default allReducers;