
const generateNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max + 1))
}

const generateUsers = (number) => {
  const users = []
  let counterRepeatIP = 0
  let firstNumberIP = 0
  for (let i = 0; i < number; i++) {
    firstNumberIP = counterRepeatIP % 10000 === 0 ? generateNumber(255) : firstNumberIP
    counterRepeatIP++
    users.push({
      login: `User${i}`,
      password: `${i}`,
      ip: `${firstNumberIP}.${generateNumber(255)}.${generateNumber(255)}.${generateNumber(255)}`,
      is_active: i % 2 === 0 ? false : true
    })
  }
  return users
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex.batchInsert('users', [ ...generateUsers(200000) ], 100)
    })
    .catch(err => console.log(err))
}
