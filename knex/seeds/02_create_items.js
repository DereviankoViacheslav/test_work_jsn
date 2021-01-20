
exports.seed = knex => knex('items')
  // Deletes ALL existing entries
  .del()
  .then(() => knex('items').insert([
    {
      item_name: 'Item1',
      price: 100.99,
    },
    {
      item_name: 'Item2',
      price: 200.88,
    },
  ]))
  .catch(err => console.log(err))
