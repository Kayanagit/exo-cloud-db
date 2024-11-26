const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://db_client_js_eycj_user:preYS3IEZjNHgmKrAozeK4yZxfMx0SQy@dpg-ct2t5qbqf0us73a1tsv0-a.frankfurt-postgres.render.com/db_client_js_eycj', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;