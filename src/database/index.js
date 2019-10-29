import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Event from '../app/models/Event';
import WishList from '../app/models/WishList';

const models = [User, File, Event, WishList];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
