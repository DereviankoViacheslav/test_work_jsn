
exports.up = knex => {
    return knex.schema.createTable('items', table => {
        table.increments('iid').unsigned().primary()
        table.string('item_name').notNull()
        table.decimal('price', 10, 2)
    })
}

exports.down = knex => knex.schema.dropTable('items')
