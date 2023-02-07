module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'svc-app-loja.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bd_app_delivery'),
      user: env('DATABASE_USERNAME', 'user_bdloja'),
      password: env('DATABASE_PASSWORD', 'Senac@2022'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
  },
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'bd_app_delivery'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', 'root'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
