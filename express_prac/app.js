const { json } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({ status: 'success', data: { tours } });
};
const postTour = (req, res) => {
  // since we don't have database, so to add new item to last id+1
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const getTourByID = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid ID',
    });
  } else {
    res.status(200).json({ status: 'success', data: { tour } });
  }
};
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.id.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid ID',
    });
  } else {
    res
      .status(200)
      .json({ status: 'success', data: { tour: '<updated tour here..>' } });
  }
};
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.id.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid ID',
    });
  } else {
    res.status(204).json({ status: 'success', data: null });
  }
};

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', postTour);
// app.get('/api/v1/tours/:id', getTourByID);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(postTour);
app
  .route('api/v1/tours/:id')
  .get(getTourByID)
  .patch(updateTour)
  .delete(deleteTour);

app.use((req, res) => {
  res.send('<h1>404! Not Found<h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
