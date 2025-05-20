const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
  connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DBNAME}?ssl=true`,
});
