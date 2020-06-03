import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { Link } from 'react-router-dom';

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
    fetch('./track')
      .then((jsonData) => jsonData.json())
      .then((data) => {
        this.props.setTracks(data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    const tracks = [];
    if (this.props.trackList.length > 0) {
      this.props.trackList.forEach((track, index) => {
        tracks.push(
          <tr className="track" key={`track${index}`}>
            <td className="name">{track.name}</td>
            <td className="artist">{track.artist}</td>
            <td className="type">{track.type}</td>
            <td className="year">{track.year}</td>

            {track.link ? (
              <td className="link">
                <a
                  href={track.link}
                  className="linkAnchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              </td>
            ) : (
              <td className="link"></td>
            )}
            <td>
              <button className="btn updateBtn">
                <Link to="/update" className="updateLink">
                  Update
                </Link>
              </button>
            </td>
            <td>
              <button className="btn deleteBtn">Delete</button>
            </td>
          </tr>
        );
      });
    }

    return (
      <div className="tableContainer">
        <table>
          <thead>
            <tr className="topRow">
              <th>Name</th>
              <th>Artist</th>
              <th>Type</th>
              <th>Year</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{tracks}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
