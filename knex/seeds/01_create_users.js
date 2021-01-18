
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function (data) {
      if (data.length) return
      // Inserts seed entries
      return knex('users').insert([
        {
          login: 'User3',
          password: '123',
          ip: 255,
          is_active: true,
        },
        {
          login: 'User4',
          password: '123',
          ip: 255,
          is_active: false,
        },
      ])
    })
}
