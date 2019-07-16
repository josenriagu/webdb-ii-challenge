exports.up = function(knex) {
   return knex.schema.alterTable('cars', cars => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      cars.timestamp('created_at').defaultTo(new Date().toLocaleDateString('en-US', options))
      cars.timestamp('updated_at').defaultTo(new Date().toLocaleDateString('en-US', options))
  })
};

exports.down = function(knex) {
   return knex.schema.alterTable('cars', cars => {
      cars.dropColumn('created_at', 'updated_at');
   });
};
