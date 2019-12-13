//juntamos todos los reducers
import {combineReducers} from 'redux';

//traemos todos los reducers
import Cityreducer from './Cityreducers';
import Itineraryreducer from './Itineraryreducers';
//exportamos todos los reducers combinados
export default combineReducers({
    cityitem:Cityreducer,
    itineraryitem:Itineraryreducer
});

