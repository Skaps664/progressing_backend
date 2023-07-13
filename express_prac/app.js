const { json } = require('express');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//Route handle
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
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rote is not defined yet',
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This ro te is not defined yet',
  });
};

//routes

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(postTour);
tourRouter.route('/:id').get(getTourByID).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createUser);

app.use('/api/v1/tours ', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
