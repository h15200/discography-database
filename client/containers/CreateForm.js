import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';

const CreateForm = () => {
  return (
    <>
      <h1>Create Track</h1>
      <form action="/track" method="post">
        <label>
          Name of project, track, or whole album
          <input
            type="text"
            name="name"
            placeholder="name of project"
            required
          />
        </label>

        <label>
          Artist/Leader Name
          <input type="text" name="artist" required />
        </label>

        <p>Type</p>
        <input type="radio" name="type" value="music" id="music" required />
        <label htmlFor="music">Music</label>
        <input type="radio" name="type" value="filmscore" id="filmscore" />
        <label htmlFor="film score">Film Score</label>
        <input type="radio" name="type" value="commercial" id="commercial" />
        <label htmlFor="commercial">Commercial</label>
        <label htmlFor="other">other</label>
        <input type="text" name="type" id="other" />

        <label>
          Year of Performance or Release
          <input
            type="number"
            name="year"
            min="1998"
            placeholder="1998"
            required
          />
        </label>

        <label>
          Link to primary performance video or press
          <input type="url" placeholder="https://youtube.com" name="link" />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
};

export default CreateForm;
