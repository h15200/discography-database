import * as types from '../constants/actionTypes';

export const setTracks = (trackArray) => ({
  type: types.SET_TRACKS,
  payload: trackArray,
});

export const addTrack = (trackData) => ({
  type: types.ADD_TRACK,
  payload: trackData,
});
