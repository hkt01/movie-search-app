const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const dotenv = require('dotenv').config();
const cors = require('cors');

// const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: true}));

// REST API routes
app.use('/movies', require('./routes/movies'));
app.use('/reviews', require('./routes/reviews'));

// Static files for the frontend app
app.use('/', express.static('../frontend/build/'));

// Catch 404 Errors
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;

  // Respond to client
  res.status(status).json({
    error: {
      message: err.message
    }
  });

  // Log to console
  console.error(err);
});

const server = app.listen(port, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Server listening at http://%s:%s", host, port)
})
