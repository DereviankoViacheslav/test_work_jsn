
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('uid').unsigned().primary()
        table.string('login').notNullable()
        table.string('password').notNull()
        table.timestamp('registration_date').defaultTo(knex.fn.now())
        table.timestamp('last_visit_date').defaultTo(knex.fn.now())
        table.integer('ip').nullable()
        table.boolean('is_active')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
