'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataImp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataImp.init({
    cliente: DataTypes.STRING,
    cuenta: DataTypes.STRING,
    direccion: DataTypes.STRING,
    nroTransaccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataImp',
    freezeTableName: true
  });
  return DataImp;
};