
exports.up = knex => {
    return knex.schema.createTable('users_groups', table => {
        table.integer('uid').unsigned()
        table.foreign('uid').references('users.uid').onDelete('CASCADE')
        table.integer('gid').unsigned()
        table.foreign('gid').references('groups.gid').onDelete('CASCADE')
        table.unique(['uid', 'gid'], 'uid_gid')
    })
}

exports.down = knex => knex.schema.dropTable('users_groups')
