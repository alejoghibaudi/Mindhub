import axios from 'axios';
import { GET_ITINERARY } from './types';

export const getItinerary = (ciudad) => dispatch => {
	axios.get('http://localhost:5000/api/itinerary/'+ciudad).then(res =>
		dispatch({
			type: GET_ITINERARY,
			payload: res.data.data
		})
	);
};
