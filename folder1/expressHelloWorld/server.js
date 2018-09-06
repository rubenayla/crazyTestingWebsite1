/*print("hello {0}{0}{1} ".format(5,6))*/
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/cursos', function (req, res) {
  res.send('/cursos')
})

app.listen(8989)
