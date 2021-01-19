
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(function () {
      knex.select('uid').from('users').then(data => console.log(data))
      // Inserts seed entries
      // return knex.batchInsert('orders', [ 'order1', 'order2' ], 100)
    })
}
