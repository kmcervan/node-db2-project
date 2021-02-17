
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
      table.increments()
      table.decimal("VIN").unique().notNullable()
      table.text("make",128).notNullable()
      table.text("model",128).notNullable()
      table.decimal("mileage")
      table.text("transmission",128)
      table.text("titleStatus",128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
