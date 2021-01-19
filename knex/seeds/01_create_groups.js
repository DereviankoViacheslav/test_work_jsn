
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('groups')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {
          group_name: 'temporary',
        },
        {
          group_name: 'regular',
        },
        {
          group_name: 'editors',
        },
        {
          group_name: 'admin',
        },
      ])
    })
}
