import React from 'react';
import Table from './containers/Table';
import styles from '../styles.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div id="app">
      <h1>Discography</h1>
      <Table />
      <div className="createBtnContainer">
        <Link className="create" to="/newtrack">
          Create new track
        </Link>
      </div>
    </div>
  );
};

export default App;
