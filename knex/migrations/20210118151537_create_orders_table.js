
exports.up = knex => {
    return knex.schema.createTable('orders', table => {
        table.increments('oid').unsigned().primary()
        table.integer('uid').unsigned()
        table.foreign('uid').references('users.uid').onDelete('SET NULL')
        table.integer('pid').unsigned()
        table.foreign('pid').references('partners.pid').onDelete('SET NULL')
        table.integer('iid').unsigned()
        table.foreign('iid').references('items.iid').onDelete('SET NULL')
    })
}

exports.down = knex => knex.schema.dropTable('orders')
