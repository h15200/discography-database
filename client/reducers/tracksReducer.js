import * as types from '../constants/actionTypes';

const initialState = {
  tracksList: [],
};

const tracksReducer = (state = initialState, action) => {
  let tracksList;
  switch (action.type) {
    case types.GET_TRACKS:
      tracksList = [];
      // use payload to edit the new marketList
      // return marketLIst
      return {
        ...state,
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
