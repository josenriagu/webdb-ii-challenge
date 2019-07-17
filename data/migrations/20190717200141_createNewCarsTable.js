
exports.up = function (knex) {
   return knex.schema.createTable('cars', car => {
      car.increments();
      car.string('VIN', 128).notNullable().unique();
      car.string('make', 128).notNullable();
      car.string('model', 128).notNullable();
      car.string('mileage', 128).notNullable();
      car.string('transmission', 128);
      car.string('status', 128);
      car.timestamp('created_at').defaultTo(knex.fn.now());
      car.timestamp('updated_at').defaultTo(knex.fn.now());
   })
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('cars');
};
