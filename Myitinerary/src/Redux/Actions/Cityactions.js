//importamos axios para traer la base de datos
import axios from 'axios';
import {GET_CITY} from './types';

export const getCity=()=>dispatch=>{
    axios.get('http://localhost:5000/api/city')
        .then(res=>dispatch({
            type:GET_CITY,
            payload:res.data.data
        })
        );
};
