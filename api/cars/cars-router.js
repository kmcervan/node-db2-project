const express = require('express');
const db = require("../../data/dbConfig");

// const knex = require('knex');

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve car ' });
    });
});

router.post('/', (req, res) => {
  const carsData = req.body;
  db('cars').insert(carsData)
    .then(ids => {
      return db('cars').where({ id: ids[0] })
    })
    .then(newCarEntry => {
      res.status(201).json(newCarEntry);
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
