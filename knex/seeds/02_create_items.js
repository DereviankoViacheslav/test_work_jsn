
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items')
    .then(function (data) {
      if (data.length) return
      // Inserts seed entries
      return knex('items').insert([
        {
          item_name: 'Item1',
          price: 100.99,
        },
        {
          item_name: 'Item2',
          price: 200.88,
        },
      ])
    })
}
