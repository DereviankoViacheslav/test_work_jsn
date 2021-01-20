const faker = require('faker')

const NUMBER_USERS = 200000
const NUMBER_DUPLICATE_FIRST_VALUE_IP = 10000
const REGISTRATION_DATE_START = new Date('2017-01-01')
const REGISTRATION_DATE_END = new Date('2017-12-31')
const LAST_VISIT_DATE_START = new Date('2018-01-01')
const LAST_VISIT_DATE_END = new Date('2018-12-31')

const generateNumber = max => Math.floor(Math.random() * Math.floor(max + 1))

const generateUsers = number => {
  const users = []
  let counterRepeatIP = 0
  let firstNumberIP = 0
  for (let i = 0; i < number; i++) {
    firstNumberIP = counterRepeatIP % NUMBER_DUPLICATE_FIRST_VALUE_IP === 0 ? generateNumber(255) : firstNumberIP
    counterRepeatIP++
    users.push({
      login: faker.name.findName(),
      password: faker.internet.password(),
      ip: `${firstNumberIP}.${generateNumber(255)}.${generateNumber(255)}.${generateNumber(255)}`,
      is_active: faker.random.boolean(),
      registration_date: faker.date.between(REGISTRATION_DATE_START, REGISTRATION_DATE_END),
      last_visit_date: faker.date.between(LAST_VISIT_DATE_START, LAST_VISIT_DATE_END),
    })
  }
  return users
}

exports.seed = knex => knex('users')
  // Deletes ALL existing entries
  .del()
  .then(() => knex.batchInsert('users', [...generateUsers(NUMBER_USERS)], 10000))
  .catch(err => console.log(err))
