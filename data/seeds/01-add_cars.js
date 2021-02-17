
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '123456789', make: 'toyota', model: 'prius', milage: '123456', transmission: 'auto', titleStatus: 'clean'},
        {id: 2, VIN: '123456781', make: 'toyota', model: 'camry', milage: '123454', transmission: 'manual', titleStatus: ''},
        {id: 3, VIN: '123451789', make: 'toyota', model: 'corolla', milage: '1256', transmission: '', titleStatus: 'clean'}
      ]);
    });
};
