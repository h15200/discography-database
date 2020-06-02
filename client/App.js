import React from 'react';
import styles from '../styles.css';

const App = () => {
  const testData = {
    id: '12',
    name: 'testName',
    type: 'jazz',
    artist: 'Hideaki',
    year: '2010',
    label: 'leadingTone Records',
  };

  const array = [testData];

  // take the array (from database eventually), loop and make a list of components

  // eventually use state to store this data
  const tracks = [];
  array.forEach((track, index) => {
    tracks.push(
      <tr className="track" key={`track${index}`}>
        <td className="id">{track.id}</td>
        <td className="name">{track.name}</td>
        <td className="type">{track.type}</td>
        <td className="artist">{track.artist}</td>
        <td className="year">{track.year}</td>
        <td className="label">{track.label}</td>
      </tr>
    );
  });

  return (
    <div id="app">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Track Name</th>
            <th>Type</th>
            <th>Artist</th>
            <th>Year Released</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>{tracks}</tbody>
      </table>
    </div>
  );
};

export default App;
