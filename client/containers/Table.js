import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  trackList: state.tracks.tracksList,
  sortBy: state.tracks.sortBy,
});

const mapDispatchToProps = (dispatch) => ({
  setTracks: (data) => dispatch({ type: types.SET_TRACKS, payload: data }),
  addTrack: (data) => dispatch({ type: types.SET_CURRENT, payload: data }),
  toggleSortOrder: (sortBy) =>
    dispatch({ type: types.TOGGLE_SORT_ORDER, payload: sortBy }),
});

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

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

  handleSort(e) {
    const sortBy = e.target.innerText.toLowerCase();
    fetch(`./track?sortBy=${sortBy}&order=${this.props.sortBy[sortBy]}`)
      .then((jsonData) => jsonData.json())
      .then((data) => {
        this.props.setTracks(data);
        // toggle order for next time
        this.props.toggleSortOrder(sortBy);
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
              <th onClick={this.handleSort}>Name</th>
              <th onClick={this.handleSort}>Artist</th>
              <th onClick={this.handleSort}>Type</th>
              <th onClick={this.handleSort}>Year</th>
              <th onClick={this.handleSort}>Link</th>
            </tr>
          </thead>
          <tbody>{tracks}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
