const db = require('../data/dbConfig');

module.exports = {
   get,
   getById,
   insert,
   update,
   remove,
};

function get() {
   return db('cars');
}

function getById(id) {
   return db('cars')
      .where({ id })
}

function insert(cars) {
   return db('cars')
      .insert(cars)
      .then(ids => {
         return getById(ids[0]);
      });
}

function update(id, changes) {
   return db('cars')
      .where({ id })
      .update(changes);
}

function remove(id) {
   return db('cars')
      .where('id', id)
      .del()
}