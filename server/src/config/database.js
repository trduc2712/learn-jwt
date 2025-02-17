import { Sequelize } from 'sequelize';
import env from './environment.js';

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql',
  logging: false,
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL successfully');
  } catch (err) {
    console.error('Connect to MySQL failed');
    console.error(`Error: ${err.message}`);
  }
};

export { sequelize, connectToDb };
