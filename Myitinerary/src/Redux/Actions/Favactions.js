import axios from "axios";
import { GET_FAVOURITES, POST_FAVOURITES, DELETE_FAVOURITES } from "./types";

export const getFav = UserId => dispatch => {
  axios.get(`http://localhost:5000/api/fav/${UserId}`).then(res => {
    dispatch({
      type: GET_FAVOURITES,
      payload: res.data
    });
  })
    .catch(err => {
      window.location.reload();
    });
};

export const deleteFav = favouriteId => dispatch => {
  axios.delete(`http://localhost:5000/api/fav/${favouriteId}`).then(res => {
    dispatch({
      type: DELETE_FAVOURITES,
      payload: res.data
    });
    window.location.reload();
  })
};
export const postFavOK = data => {
  return {
    type: POST_FAVOURITES,
    payload: {
      ItineraryId: data.ItineraryId,
      UserId: data.UserId
    }
  };
};

export const postFav = ({
  ItineraryId,
  UserId
}) => {
  return dispatch => {
    return axios
      .post("http://localhost:5000/api/fav", { ItineraryId, UserId })
      .then(res => {
        console.log(res.data)
        if (typeof res.data !== 'string') {
          dispatch(postFavOK(res.data));
        }
      })
  };
};