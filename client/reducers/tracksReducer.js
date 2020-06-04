import * as types from '../constants/actionTypes';

const initialState = {
  tracksList: [],
  currentTrack: {},
  sortBy: {
    name: 'asc',
    artist: 'asc',
    type: 'asc',
    year: 'asc',
    link: 'asc',
  },
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRACKS:
      return {
        ...state,
        tracksList: action.payload,
      };
    case types.SET_CURRENT:
      return { ...state, currentTrack: action.payload };

    case types.TOGGLE_SORT_ORDER:
      let newOrder;
      // get the type-specific order from current state
      const currentOrder = state.sortBy[action.payload];
      // toggle
      if (currentOrder === '' || currentOrder === 'desc') {
        newOrder = 'asc';
      } else {
        newOrder = 'desc';
      }
      let newSortBy = { ...state.sortBy };
      newSortBy[action.payload] = newOrder;

      return { ...state, sortBy: newSortBy };
    default:
      return state;
  }
};

export default tracksReducer;
