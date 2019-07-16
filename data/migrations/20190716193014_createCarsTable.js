
exports.up = function(knex) {
   return knex.schema.createTable('cars', table => {
      table.increments();
      table.string('VIN', 128).notNullable().unique();
      table.string('make', 128).notNullable();
      table.string('model', 128).notNullable();
      table.string('mileage', 128).notNullable();
      table.string('transmission', 128);
      table.string('status', 128);
      table.timestamps();
  })
};

// down function provides the reverse of the up function
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cars');
};
