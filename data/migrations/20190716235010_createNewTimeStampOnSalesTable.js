exports.up = function (knex) {
   return knex.schema.alterTable('sales', sales => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      sales.timestamp('created_at').defaultTo(new Date().toLocaleDateString('en-US', options))
      sales.timestamp('updated_at').defaultTo(new Date().toLocaleDateString('en-US', options))
   })
};

exports.down = function (knex) {
   return knex.schema.alterTable('sales', sales => {
      sales.dropColumn('created_at', 'updated_at');
   });
};