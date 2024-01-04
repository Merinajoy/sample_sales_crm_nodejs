import Sequelize from 'sequelize';
import Config from './config.js';
import UserModel from './models/users.js';
import ClinicModel from './models/clinic.js';
import NotesModel from './models/notes.js';

const config = Config;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false,
  }
);

sequelize.options.logging = console.log;

const User = UserModel(sequelize);
const Clinic = ClinicModel(sequelize);
const Notes = NotesModel(sequelize);

Clinic.belongsTo(User, { foreignKey: 'ID', as: 'User' });
Notes.belongsTo(Clinic, { foreignKey: 'ID', as: 'Clinic' });

// Set up associations after sync
sequelize.sync({ force: false }).then(async () => {
  console.log('Tables synced');
});

export { User, Clinic, Notes, sequelize };
