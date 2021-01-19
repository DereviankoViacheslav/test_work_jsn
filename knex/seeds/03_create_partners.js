
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('partners')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {
          partner_name: 'Partner1',
        },
        {
          partner_name: 'Partner2',
        },
      ])
    })
}
