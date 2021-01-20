
const NUMBER_ORDERS = 500000

const generateNumber = max => Math.floor(Math.random() * max)

const createOrdersArr = ({ user_ids, item_ids, partner_ids }, number) => {
  const orders = []
  const partnersArr = [...partner_ids, null]
  for (let i = 0; i < number; i++) {
    const randomUserId = user_ids[generateNumber(user_ids.length)]
    const randomPartnerId = partnersArr[generateNumber(partnersArr.length)]
    const randomItemId = item_ids[generateNumber(item_ids.length)]
    orders.push({ uid: randomUserId, pid: randomPartnerId, iid: randomItemId })
  }
  return orders
}

exports.seed = knex => knex('orders')
  // Deletes ALL existing entries
  .del()
  .then(() => knex.select('uid').from('users')
    .then(uids => ({ user_ids: uids.map(({ uid }) => uid) }))
    .then(data => knex.select('iid').from('items')
      .then(iids => ({ ...data, item_ids: iids.map(({ iid }) => iid) }))
    )
    .then(data => knex.select('pid').from('partners')
      .then(pids => ({ ...data, partner_ids: pids.map(({ pid }) => pid) }))
    )
    .then(data => knex.batchInsert('orders', [...createOrdersArr(data, NUMBER_ORDERS)], 10000))
  )
  .catch(err => console.log(err))
