
const createUsersGroupsArr = ({ adminId, group_ids, user_ids }) => {
  const users_groups = [{ gid: adminId, uid: user_ids[0] }]
  for (let i = 1; i < user_ids.length; i++) {
    const counterGroups = Math.floor(Math.random() * (group_ids.length + 1))
    for (let j = 0; j < counterGroups; j++) {
      users_groups.push({ gid: group_ids[j], uid: user_ids[i] })
    }
  }
  return users_groups
}

exports.seed = knex => knex('users_groups')
  // Deletes ALL existing entries
  .del()
  .then(() => knex.select('gid').from('groups')
    .then(gids => knex.select('gid').from('groups').where('group_name', 'admin')
      .then(adminId => {
        const group_ids = gids
          .filter(({ gid }) => gid !== adminId[0].gid)
          .map(({ gid }) => gid)
        return { adminId: adminId[0].gid, group_ids }
      })
    )
    .then(({ adminId, group_ids }) => knex.select('uid').from('users')
      .then(uids => {
        const user_ids = uids.map(({ uid }) => uid)
        return { adminId: adminId, group_ids, user_ids }
      })
    )
    .then(data => knex.batchInsert('users_groups', [...createUsersGroupsArr(data)], 10000))
  )

