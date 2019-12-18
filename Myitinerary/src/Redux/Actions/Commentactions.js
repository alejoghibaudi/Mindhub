import axios from "axios";
import { GET_COMMENT, POST_COMMENT, GET_COMMENTID } from "./types";

export const getCommentId = ItineraryId => dispatch => {
  axios.get(`http://localhost:5000/api/comment/${ItineraryId}`).then(res => {
    dispatch({
      type: GET_COMMENTID,
      payload: res.data
    });
  });
};
export const getAllComment = () => dispatch => {
  axios.get("http://localhost:5000/api/comment").then(res => {
    dispatch({
      type: GET_COMMENT,
      payload: res.data
    });
  });
};
export const postnewComment = data => {
  return {
    type: POST_COMMENT,
    payload: {
      message: data.message,
      username: data.username,
      ItineraryId: data.ItineraryId
    }
  };
};

export const postComments = ({
  message,
  username,
  ItineraryId
}) => {
  return dispatch => {
    return axios
      .post("http://localhost:5000/api/comment", { message, username, ItineraryId })
      .then(res => {
        dispatch(postnewComment(res.data));
      })
  };
};