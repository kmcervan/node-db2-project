const express = require('express');
const router = express.Router();
const Cars = require('./cars-model');

router.get('/', (req, res) => {
    Cars.get()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {res.status(500).json(error.message)})
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    Cars.getById(id)
    .then( cars => {
        res.status(200).json(cars)
    })
    .catch(error => { res.status(500).json(error.message)})
})
router.post('/', (req, res) => {
    const carsBody = req.body
    Cars.create(carsBody)
    .then(cars => {
        res.status(201).json(cars)
    })
    .catch(error => {res.status(500).json(error.message)})
})
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Cars.update(id, changes)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(error => {res.status(500).json(error.message)})
})
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Cars.remove(id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {res.status(500).json(error.message)})
})

module.exports = router;