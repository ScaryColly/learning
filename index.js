const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies', (req, res) => {
  res.send('start wars!');
});

app.post('/movies', (req, res) => {
  res.send('post start wars!');
});

app.delete('/movies', (req, res) => {
  res.send('delete start wars!');
});

app.put('/movies', (req, res) => {
  res.send('put start wars!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});