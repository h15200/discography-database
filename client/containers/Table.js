import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { render } from 'react-dom';

const mapStateToProps = (state) => ({
  trackList: state.tracks.tracksList,
});

const mapDispatchToProps = (dispatch) => ({
  getTracks: () => dispatch({ type: types.GET_TRACKS }),
  addTrack: () => dispatch({ type: types.ADD_TRACK }),
});

class Table extends React.Component {
  // contructor(props) {
  //   super(props);
  //   // bind any methods
  render() {
    const testData = {
      name: 'testName',
      type: 'jazz',
      artist: 'Hideaki',
      year: '2010',
      label: 'leadingTone Records',
    };

    const array = [testData];

    // take the array (from database eventually), loop and make a list of components
    // incoming JSON reminder.
    // {
    //   name: { type: String, required: true },
    //   type: { type: String, required: true },
    //   artist: { type: String },
    //   yearReleased: { type: Number },
    //   label: { type: Number },
    // }
    // eventually use state to store this data
    const tracks = [];
    array.forEach((track, index) => {
      tracks.push(
        <tr className="track" key={`track${index}`}>
          <td className="name">{track.name}</td>
          <td className="type">{track.type}</td>
          <td className="artist">{track.artist}</td>
          <td className="year">{track.year}</td>
          <td className="label">{track.label}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Track Name</th>
            <th>Type</th>
            <th>Artist</th>
            <th>Year Released</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>{tracks}</tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
