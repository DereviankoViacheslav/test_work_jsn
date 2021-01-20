
exports.seed = knex => knex('groups')
  // Deletes ALL existing entries
  .del()
  .then(() => knex('groups').insert([
    { group_name: 'temporary' },
    { group_name: 'regular' },
    { group_name: 'editors' },
    { group_name: 'admin' },
  ]))
  .catch(err => console.log(err))
