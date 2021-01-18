
exports.up = function (knex) {
    return knex.schema.createTable('items', function (table) {
        table.increments('iid').unsigned().primary()
        table.string('item_name').notNull()
        table.decimal('price', 10, 2)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('items')
}
