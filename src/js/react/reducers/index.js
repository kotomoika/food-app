import {combineReducers} from 'redux';

// My Own Reducers
import FoodBrandsReducer from './reducer-food-brands';
import ActiveBrand from './reducer-active-brand';

// Combining all data in one big Object
const allReducers = combineReducers({
    foodBrands: FoodBrandsReducer,
    activeBrand: ActiveBrand
});

export default allReducers;