const express = require('express')
const app = express()
// Using Node.js `require()`



app.get('/', function (req, res) {
  res.send('Hello World')
})




  app.listen(3000, console.log('Connected to localhost port 3000')), 




