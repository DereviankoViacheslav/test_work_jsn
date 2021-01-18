
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('groups')
    .then(function (data) {
      if (data.length) return
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
