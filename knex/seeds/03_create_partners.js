
exports.seed = knex => knex('partners')
  // Deletes ALL existing entries
  .del()
  .then(() => knex('partners').insert([
    { partner_name: 'Partner1' },
    { partner_name: 'Partner2' },
  ]))
  .catch(err => console.log(err))
