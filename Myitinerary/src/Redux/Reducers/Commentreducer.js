import { GET_COMMENT, GET_COMMENTID,POST_COMMENT } from "../Actions/types";

const initialState = {
  comments: [],
  comment: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        comments: action.payload
      };
    case GET_COMMENTID:
      return {
        ...state,
        comments: action.payload
      };
    case POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };

    default:
      return state;
  }
}