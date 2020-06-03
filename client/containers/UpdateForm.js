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
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
