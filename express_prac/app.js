const { json } = require('express');
const express = require('require');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the serverside', app: 'Notours' });
});

app.post('/', () => {
  res.send('You can post to this endpoint');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App runnning on port ${port}`);
});
