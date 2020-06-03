require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const trackRouters = require('./routes/track');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'discography-database',
  })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => console.log(err));

// to parse post requests in JSON format
app.use(express.json());
// to parse FORM requests
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('/track', trackRouters);

// global error handler
app.use((err, req, res, next) => {
  const errorMessage = err.message || 'Unknown middleware error';
  const errorStatus = err.status || 500;
  console.log(errorMessage, errorStatus);
  return res.status(errorStatus).send(errorMessage);
});

app.listen(3000, () => {
  console.log('listening on port ', PORT);
});
