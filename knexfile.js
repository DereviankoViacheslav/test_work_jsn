module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'default',
      password: 'secret',
      database: 'default',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
