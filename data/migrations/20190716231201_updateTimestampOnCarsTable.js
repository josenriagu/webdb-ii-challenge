exports.up = function(knex) {
   return knex.schema.alterTable('cars', cars => {
      cars.dropColumn('created_at', 'updated_at');
   });
};

exports.down = function(knex) {
   return knex.schema.alterTable('cars', cars => {
      cars.timestamps();
   });
};
