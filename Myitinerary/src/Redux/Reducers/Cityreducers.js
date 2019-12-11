//traemos el tipo de accion
import {GET_CITY} from '../Actions/types';
//declaramos el estado inicial a llenar
//con el mismo nombre que tiene en el store
const initialState={
    city:[]
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_CITY:
            return{
                ...state,
                city:action.payload //el payload llega de las actions
            };
        default: //si no llega ningun caso que devuelta el initialstate
            return state; 
    }
}