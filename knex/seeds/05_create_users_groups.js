
const addUsersToGroup = ({ adminId, group_ids, user_ids }) => {
  const users_groups = [{ gid: adminId, uid: user_ids[0] }]
  for (let i = 1; i < user_ids.length; i++) {
    for (let j = 0; j < group_ids.length; j++) {
      users_groups.push({ gid: group_ids[j], uid: user_ids[i] })
    }
  }
  return users_groups
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_groups')
    .del()
    .then(function () {
      return knex.select('gid')
        .from('groups')
        .then(function (gids) {
          return knex.select('gid').from('groups').where('group_name', 'admin').then(adminId => {
            const group_ids = gids.filter(({ gid }) => {
              return gid !== adminId[0].gid
            }).map(({ gid }) => gid)
            return { adminId: adminId[0].gid, group_ids }
          })
        })
        .then(function ({ adminId, group_ids }) {
          return knex.select('uid').from('users').then(uids => {
            const user_ids = uids.map(({ uid }) => uid)
            return { adminId: adminId, group_ids, user_ids }
          })
        })
        .then(function (data) {
          return knex.batchInsert('users_groups', [ ...addUsersToGroup(data) ], 100)
        })
    })
}
