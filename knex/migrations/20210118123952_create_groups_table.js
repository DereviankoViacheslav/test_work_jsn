
exports.up = function (knex) {
    return knex.schema.createTable('groups', function (table) {
        table.increments('gid').unsigned().primary()
        table.string('group_name').notNull()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('groups')
}
