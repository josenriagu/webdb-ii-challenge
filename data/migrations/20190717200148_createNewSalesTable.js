
exports.up = function (knex) {
   return knex.schema.createTable('sales', sales => {
      sales.increments();
      sales
         .integer('car_id')
         .unsigned()
         .notNullable()
         .references('id') // helps to target a specific column in adjacent table
         .inTable('car')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      sales.string('customer_name', 128).notNullable();
      sales.string('payment_method', 128).notNullable();
      sales.boolean('delivered').defaultTo(false);
      sales.timestamp('created_at').defaultTo(knex.fn.now());
      sales.timestamp('updated_at').defaultTo(knex.fn.now());
   });
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('sales');
};
