
exports.up = function (knex) {
    return knex.schema.createTable('partners', function (table) {
        table.increments('pid').unsigned().primary()
        table.string('partner_name').notNull()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('partners')
}
