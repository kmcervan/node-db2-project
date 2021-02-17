
exports.up = function(knex) {
  return knex.schema.table("cars", table=>{
      table.string("color",128)
  })
};

exports.down = function(knex) {
  return knex.schema.table("cars", table=>{
      table.dropColumn("color")
  })
};
