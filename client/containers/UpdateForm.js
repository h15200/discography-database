import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';

const mapStateToProps = (state) => ({
  tracksList: state.tracks.tracksList,
  currentTrack: state.tracks.currentTrack,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrent: (data) => dispatch({ type: types.SET_CURRENT, payload: data }),
});

// const UpdateForm = () => {
//   const id = window.location.href.split('update/')[1];
//   if (this.props.tracksList[i]._id === id) {
//     trackToUpdate = this.props.tracksList[i];
//     return console.log('found', trackToUpdate);
//   }
//   console.log(id);
//   return (
//     <>
//       <h1>Update Track</h1>
//     </>
//   );
// };

class UpdateForm extends React.Component {
  componentDidMount() {
    const id = window.location.href.split('update/')[1];
    for (let i = 0; i < this.props.tracksList.length; i++) {
      if (this.props.tracksList[i]._id === id) {
        this.props.setCurrent(this.props.tracksList[i]);
      }
    }
  }

  render() {
    return (
      <>
        <h1>Update Form</h1>
        <form action="/track/update" method="post">
          <label className="block">
            Name of project, track, or whole album:
            <input
              type="text"
              name="name"
              placeholder="name of project"
              required
            />
          </label>

          <label className="block">
            Artist/Leader Name:
            <input type="text" name="artist" required />
          </label>

          <p>Type:</p>
          <input
            className="radio"
            type="radio"
            name="type"
            value="music"
            id="music"
            required
          />
          <label htmlFor="music">Music</label>
          <input
            className="radio"
            type="radio"
            name="type"
            value="filmscore"
            id="filmscore"
          />
          <label htmlFor="film score">Film Score</label>
          <input
            className="radio"
            type="radio"
            name="type"
            value="commercial"
            id="commercial"
          />
          <label htmlFor="commercial">Commercial</label>
          <input
            className="radio"
            type="radio"
            name="type"
            value="other"
            id="other"
          />
          <label htmlFor="other">Other</label>
          <input
            className="radio"
            type="text"
            name="type"
            id="other"
            placeholder="Custom Type"
          />

          <label className="block">
            Year of Performance or Release:
            <input
              type="number"
              name="year"
              min="1998"
              placeholder={new Date().getFullYear()}
              required
            />
          </label>

          <label className="block">
            Link to performance/press (optional):
            <input type="url" placeholder="https://youtube.com" name="link" />
          </label>
          <div className="buttonContainer">
            <button>Update</button>
          </div>
        </form>
        <div className="currentTrack">
          <h2>Current Track Info</h2>
          <ul>
            <li>Name - {this.props.currentTrack.name}</li>
            <li>Artist - {this.props.currentTrack.artist}</li>
            <li>Type - {this.props.currentTrack.type}</li>
            <li>Year - {this.props.currentTrack.year}</li>
            <li>Link - {this.props.currentTrack.link || 'none'}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
