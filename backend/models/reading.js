'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reading extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reading.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    manualId: { type: DataTypes.INTEGER },
    read: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    sequelize,
    modelName: 'reading',
  });
  return Reading;
};