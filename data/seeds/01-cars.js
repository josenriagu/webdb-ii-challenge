
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '1FMZU62XXYZB83726', make: 'Mercedes-Benz', model: 'c63 AMG 2019', mileage: '0', transmission: 'automatic', status: 'clean' },
        { VIN: '1HD1FCW142Y649128', make: 'Toyota', model: 'Avalon 2018', mileage: '0', transmission: 'automatic', status: 'clean' },
        { VIN: '2GCEK13V461315006', make: 'Ford', model: 'Focus 2016', mileage: '4000', transmission: 'automatic', status: 'used' },
        { VIN: '1FMZU64E95UA46376', make: 'Toyota', model: 'Camry 2014', mileage: '7500', transmission: 'automatic', status: 'salvage' },
        { VIN: 'YV1TS592561462690', make: 'Volva', model: 'SUV 2019', mileage: '0', transmission: 'automatic', status: 'clean' },
      ]);
    });
};
