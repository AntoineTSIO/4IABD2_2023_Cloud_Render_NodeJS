const { Sequelize } = require('sequelize')

// Database connection URL
const connectionString = 'External_Database_URL';

// Database
const sequelize = new Sequelize(
  connectionString,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie.');
    })
    .catch((erreur) => {
        console.error('Erreur de connexion à la base de données :', erreur);
    });
sequelize.sync()

module.exports = sequelize
