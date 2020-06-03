import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';

const CreateForm = () => {
  return (
    <>
      <h1>Create Track</h1>
      <form action="/track" method="post">
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
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateForm;
