module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'svc-app-loja.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bd_app_delivery'),
      user: env('DATABASE_USERNAME', 'user_bdloja'),
      password: env('DATABASE_PASSWORD', 'Waslote@80'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
