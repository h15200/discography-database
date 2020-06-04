import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  trackList: state.tracks.tracksList,
});

const mapDispatchToProps = (dispatch) => ({
  setTracks: (data) => dispatch({ type: types.SET_TRACKS, payload: data }),
  addTrack: (data) => dispatch({ type: types.SET_CURRENT, payload: data }),
});

class Table extends React.Component {
  componentDidMount() {
    fetch('./track')
      .then((jsonData) => jsonData.json())
      .then((data) => {
        this.props.setTracks(data);
      })
      .catch((err) => console.log(err));
  }

  handleDelete(e) {
    const result = confirm('Are you sure you want to delete this entry?');
    if (result) {
      fetch(`./track/${e.target.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          return window.location.reload();
        })
        .catch(() => console.log('problem with delete request'));
    } else return;
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
                <Link to={`/track/update/${track._id}`} className="updateLink">
                  Update
                </Link>
              </button>
            </td>
            <td>
              <button
                onClick={this.handleDelete}
                className="btn deleteBtn"
                id={track._id}
              >
                Delete
              </button>
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
