import * as types from '../constants/actionTypes';

const initialState = {
  tracksList: [],
};

const tracksReducer = (state = initialState, action) => {
  let tracksList;
  switch (action.type) {
    case types.SET_TRACKS:
      console.log('action is', action);
      return {
        ...state,
        tracksList: action.payload,
      };
    case types.ADD_TRACK:
      // use payload to append
      // tracksList = [...state.tracksList, newTrackFromPayload]
      // return {
      //  tracksList
      // }
      return { ...state };
    default:
      return state;
  }
};

export default tracksReducer;
