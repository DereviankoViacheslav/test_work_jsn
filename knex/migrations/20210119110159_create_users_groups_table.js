
exports.up = function (knex) {
    return knex.schema.createTable('users_groups', function (table) {
        table.integer('uid').unsigned()
        table.foreign('uid').references('users.uid').onDelete('CASCADE')
        table.integer('gid').unsigned()
        table.foreign('gid').references('groups.gid').onDelete('CASCADE')
        table.unique(['uid', 'gid'], 'uid_gid')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users_groups')
}
