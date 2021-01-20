
exports.up = knex => {
    return knex.schema.createTable('partners', table => {
        table.increments('pid').unsigned().primary()
        table.string('partner_name').notNull()
    })
}

exports.down = knex => knex.schema.dropTable('partners')
