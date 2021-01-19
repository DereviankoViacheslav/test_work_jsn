
exports.up = function (knex) {
    return knex.schema.createTable('orders', function (table) {
        table.increments('oid').unsigned().primary()
        table.integer('uid').unsigned()
        table.foreign('uid').references('users.uid').onDelete('SET NULL')
        table.integer('pid').unsigned()
        table.foreign('pid').references('partners.pid').onDelete('SET NULL')
        table.integer('iid').unsigned()
        table.foreign('iid').references('items.iid').onDelete('NO ACTION')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('orders')
}
