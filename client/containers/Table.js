import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';

const mapStateToProps = (state) => ({
  trackList: state.tracks.tracksList,
});

const mapDispatchToProps = (dispatch) => ({
  setTracks: (data) => dispatch({ type: types.SET_TRACKS, payload: data }),
  addTrack: (data) => dispatch({ type: types.ADD_TRACK, payload: data }),
});

class Table extends React.Component {
  // contructor(props) {
  //   super(props);
  //   // bind any methods
  componentDidMount() {
    console.log('hello componentDidMount');
    fetch('./track')
      .then((jsonData) => jsonData.json())
      .then((data) => {
        console.log('data coming in from fetch ->', data);
        this.props.setTracks(data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    // const testData = {
    //   name: 'testName',
    //   type: 'jazz',
    //   artist: 'Hideaki',
    //   year: '2010',
    //   label: 'leadingTone Records',
    // };

    // take the array (from database eventually), loop and make a list of components
    // incoming JSON reminder.
    // {
    //   name: { type: String, required: true },
    //   type: { type: String, required: true },
    //   artist: { type: String },
    //   yearReleased: { type: Number },
    //   label: { type: String },
    // }
    // eventually use state to store this data
    const tracks = [];
    if (this.props.trackList.length > 1) {
      this.props.trackList.forEach((track, index) => {
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
    }

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
