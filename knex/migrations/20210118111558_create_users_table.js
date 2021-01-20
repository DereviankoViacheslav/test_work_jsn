
exports.up = knex => {
    return knex.schema.createTable('users', table => {
        table.increments('uid').unsigned().primary()
        table.string('login').notNullable()
        table.string('password').notNull()
        table.timestamp('registration_date').defaultTo(knex.fn.now())
        table.timestamp('last_visit_date').defaultTo(knex.fn.now())
        table.string('ip').nullable()
        table.boolean('is_active')
    })
}

exports.down = knex => knex.schema.dropTable('users')
