
exports.up = knex => {
    return knex.schema.createTable('groups', table => {
        table.increments('gid').unsigned().primary()
        table.string('group_name').notNull()
    })
}

exports.down = knex => knex.schema.dropTable('groups')
