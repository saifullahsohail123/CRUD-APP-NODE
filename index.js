const express = require('express')
const app = express()
// Using Node.js `require()`
const mongoose = require('mongoose');




app.get('/', function (req, res) {
  res.send('Hello World')
})





mongoose
  .connect('mongodb+srv://admin:admin@cluster0.lstf4.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to Database');
    app.listen(3000, () => {
      console.log('Connected to localhost port 3000');
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

