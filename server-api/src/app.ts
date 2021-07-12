import express from 'express';
import './services/db';

const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000!!!');
});
