import * as types from '../constants/actionTypes';

export const setTracks = (trackArray) => ({
  type: types.SET_TRACKS,
  payload: trackArray,
});

export const setCurrent = (trackData) => ({
  type: types.SET_CURRENT,
  payload: trackData,
});
