import * as types from '../constants/actionTypes';

const initialState = {
  tracksList: [],
  currentTrack: {},
};

const tracksReducer = (state = initialState, action) => {
  let tracksList;
  switch (action.type) {
    case types.SET_TRACKS:
      return {
        ...state,
        tracksList: action.payload,
      };
    case types.SET_CURRENT:
      return { ...state, currentTrack: action.payload };
    default:
      return state;
  }
};

export default tracksReducer;
