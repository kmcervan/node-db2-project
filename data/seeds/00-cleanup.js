
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      
      return knex('cars').insert([
        {vin: '46897df51', make: 'toyota', model: 'yaris', mileage: 40300, transmission: 'auto' },
        {vin: '135489ds6', make: 'honda', model: 'civic', mileage: 400700, transmission: 'manual'},
        {vin: '178546sdf', make: 'lexus', model: 'XV15', mileage: 10600, title: 'clean'}
      ]);
    });
};
