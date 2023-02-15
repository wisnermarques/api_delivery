module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  //port: env.int('PORT', 1337),
  port: env.int('PORT', 8080),
  // app: {
  //   keys: env.array('APP_KEYS'),
  // },
  app: {
    keys: ['128FxhvEXlPD+NcumnKz3Q==,qu50S9TrMff6ggo7INCgZg==,YXA7yE/phbTOclq9YhfvEA==,UMDenk/78tc4JRPNqYN+rA==']
  }
});
