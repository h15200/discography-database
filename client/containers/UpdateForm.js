import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';

const mapStateToProps = (state) => ({
  tracksList: state.tracks.tracksList,
});

// const UpdateForm = () => {
//   console.log('url is->', window.location.href);
//   const id = window.location.href.split('update/')[1];
//   console.log(id);
//   return (

//   );
// };

class UpdateForm extends React.Component {
  constructor(super) {
    super(props);
    this.trackToUpdate = undefined;
  }
  componentDidMount() {
    let trackToUpdate;
    const id = window.location.href.split('update/')[1];
    for (let i = 0; i < this.props.tracksList.length; i++) {
      if (this.props.tracksList[i]._id === id) {
        trackToUpdate = this.props.tracksList[i];
        return console.log('found', trackToUpdate);
      }
    }
  }
  render() {
    return (
      <div>
        <h1>Update Track</h1>
        <form action=""></form>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(UpdateForm);
