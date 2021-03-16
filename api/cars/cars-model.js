const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}

function get(){
    return db('cars')
}
function getById(id){
    return db('cars').where('id', id).first()
}
function create(car){
    return db('cars').insert(car)
    .then(([id]) => {
        return db('cars').where('id', id).first()
    })
}
function update(id, changes){
    const carsId = id
    return db('cars').where('id', id).update(changes)
    .then(() => {
        return db('cars').where('id', carsId).first()
    })
}
function remove(id){
    const car = id
    return db('cars').where('id', id).del()
    .then(() => {
        return car
    })
}